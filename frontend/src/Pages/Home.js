
import { useState, useEffect } from "react";
import Form from "../Components/Form";
import Details from "../Components/Details";
import axios from "axios";
import errorMessage from "../Utility";


export default function Home({setLoggedIn}) {
  const [formData, setFormData] = useState({
    description: null,
    servicetype: null,
    location: null
  })
  const [dataFetched,setDataFetched]=useState(false)

  useEffect(() => {
    if(!dataFetched){
      const jwt = localStorage.getItem("assistConnect_jwt")
      const id = localStorage.getItem("assistConnect_id")
      const  domain = process.env.REACT_APP_VariableName
      axios.get(`${domain}/getdata/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
      .then(response => {
        const data = response.data
        if (data.servicetype != null) {
          setFormData({
            description: data.description,
            servicetype: data.servicetype,
            location: data.location
          })
        }
        else{/*user will make  a submission*/}
        setDataFetched(true)
      })
      .catch(error => {
        if(error.response.status === 403){setLoggedIn(pre =>false)}
        else errorMessage(error.message, "GetDataError")
      })
  }
  }, [dataFetched,setLoggedIn])

  return (
    <>
      <Form setFormData={setFormData} setLoggedIn={setLoggedIn}/>
      <Details formData={formData} />
    </>
  )
}
