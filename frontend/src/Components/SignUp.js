import { useState } from "react";
import { useNavigate } from "react-router-dom";
import errorMessage,{cautionLen} from "../Utility";
import toast from "react-hot-toast";
import axios from "axios";
import validator from "validator";
export default function SignUp({setLoggedIn})
{

    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    if(email.length>254)cautionLen("Email","254","email_prob") 
    else toast.remove("email_prob")
    if(firstname.length>254)cautionLen("Firstname","254","firstname_prob")
    else toast.remove("firstname_prob")
    if(lastname.length>254)cautionLen("Lastname","254","lastname_prob")
    else toast.remove("lastname_prob")
    if(password.length>254)cautionLen("Password","254","password_prob")
    else toast.remove("password_prob")

    function handleSignUp(e){
        e.preventDefault()
        if (password===''|| email===''|| firstname===''|| lastname==='')
        {         
            errorMessage("Enter all fields","Cred")
            return
        }
        if(password.length>254||email.length>254||lastname.length>254||firstname.length>254){
            errorMessage("Lengths of all inputs should be less than 255")
            return
        }
        if(!validator.isEmail(email)){
            errorMessage("Enter valid email","emailInValid");
            return 
        }
        toast.remove()
        const  domain = process.env.REACT_APP_VariableName
        console.log(domain)
        axios.post(`${domain}/auth/register`,{
            email:email,
            firstname:firstname,
            lastname:lastname,
            password:password
        },{
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(Response=>{
                const data = Response.data
                const jwt = data.token
                localStorage.setItem("assistConnect_jwt",jwt)
                localStorage.setItem("assistConnect_id",email)
                setLoggedIn(true)
                navigate("/",{replace:true})
        })
        .catch(error =>{
            
            errorMessage("Error Encountered. If you are already signedup please proceed to login","LoginError")
        })
    }

    return (
        <div className='login'>
            <form>
                <div>
                    <h1>Sign up to your Account</h1>
                </div>
               
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name"/>
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}  placeholder="Last Name"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                
                <button type="submit" onClick={handleSignUp}>
                    Signup
                </button>
                <button type="button" onClick={()=>{toast.remove();navigate("/login",{replace:true})}}>
                    Login
                </button>
            </form>
        </div>
    )
}