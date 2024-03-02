import { useState } from "react";
import Map from "./Map";
import axios from "axios";
import errorMessage, { cautionLen } from "../Utility";
import toast from "react-hot-toast";

export default function Form({ setFormData, setLoggedIn })
{
    const [data, setData] = useState({
        description: null,
        servicetype: null,
        location: null
    })
    
    if(data.description&&data.description.length>1000)cautionLen("Description","1000","Describe_prob")
    else toast.remove("Describe_prob")
    
    async function handleClick(e)
    {
        e.preventDefault()
        if ( data.servicetype == null
            || data.location == null)
        {
            let message = ""
            if (data.servicetype == null)  message += "select type of service, "
            if (data.location == null) message += (message?"and ":"")+"move location marker  "

            message = message.slice(0, message.length - 2) + '.'
            errorMessage("Please " + message)
            return
        }
        if(data.description&&data.description.length>1000){
            errorMessage("Decription Length should be less than 1000")
            return
        }
        
        try {
            const {lat,lng} = data.location
            const jwt = localStorage.getItem("assistConnect_jwt")
            const dataToSend ={
                id:localStorage.getItem("assistConnect_id"),
                description:data.description,
                servicetype:data.servicetype,
                location:{latitude:lat, longitude:lng}
            }
            const  domain = process.env.REACT_APP_VariableName
            const response = await axios.post(`${domain}/formdata`, dataToSend,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            }
            )
            
            if (response.status === 201) {
                setFormData(dataToSend)
                toast.remove()
                
                setData({
                    description: null,
                    servicetype: null,
                    location: null
                })

                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth"
                })
            } else {
                if(response.status === 403){setLoggedIn(false)}
                else errorMessage("Failed to submit the form. Please try again later.","internalError")
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            errorMessage("An error occurred while submitting the form. Please try again later.","Error")
        }
    }

    function handleTextChange(e)
    {
        setData((predata) => ({
            ...predata,
            description: e.target.value
        }))
    }

    function handleServiceChange(e)
    {
        setData((predata) => ({
            ...predata,
            servicetype: e.target.value
        }))
    }

    return  <>
    <form>
        <Map setData={setData}/>
        <label htmlFor='description'>Describe your Situation</label>
        <textarea
            id="description"
            placeholder="Describe your situation here..."
            onChange={handleTextChange}
            value={data.description || ""}
        ></textarea>

        <label htmlFor='serviceType'>Type of Assistance</label>
        <select
            id='serviceType'
            onChange={handleServiceChange}
            value={data.servicetype || ""}
        >
            <option>Select</option>
            <option>Rescue</option>
            <option>FireFighters</option>
            <option>Police</option>
            <option>Medical</option>
        </select>

        <label htmlFor="formsub">Send Request</label>
        <button type="submit" id="formsub" onClick={handleClick}>
            Submit
        </button>

    </form>
    </>
}