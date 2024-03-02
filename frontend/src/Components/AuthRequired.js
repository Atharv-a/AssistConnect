
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired({loggedIn}){
    const authenticated = loggedIn
    if(!authenticated){
        return <Navigate to="/signup" replace/>
    }
    return <Outlet/>
}