import { useState } from "react";
import errorMessage,{cautionLen} from "../Utility";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

export default function Login({setLoggedIn}){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigator = useNavigate()
    
    if(email.length>254)cautionLen("Email","254","email_prob")    
    else toast.remove("email_prob")
    if(password.length>254)cautionLen("Password","254","password_prob")
    else toast.remove("password_prob")

    function handleLogin(e){
        e.preventDefault()
        if(password === '' || email === ''){
            errorMessage("All fields are required","Cred")
            return
        }
        if(password.length>254 || email.length>254){
            errorMessage("Lengths of both password and email should be less than 255","lenError")
            return 
        }
        if(!validator.isEmail(email)){
            errorMessage("Enter valid email","emailInValid");
            return 
        }
        toast.remove()
        const  domain =process.env.REACT_APP_VariableName
        axios.post(`${domain}/auth/authenticate`,{
                email:email,
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
                navigator("/",{replace:true})
        })
        .catch(error =>{
            errorMessage("Enter correct credentials","LoginError")
        })
    }
  
    return (
        <div className="login">
            <form>
                <div>
                    <h1>Login to your Account</h1>
                </div>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" onClick={handleLogin}>
                    Login
                </button>

                <button type="button" onClick={()=>{toast.remove();navigator("/signup",{replace:true})}}>
                    SignUp
                </button>
            </form>
        </div>
    )


}