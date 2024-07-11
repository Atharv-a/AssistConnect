import { Navigate, Outlet } from 'react-router-dom'

function Authenticator() {
    const loggedIn = sessionStorage.getItem("ASSIST_CONNECT_LOGGEDIN");
    if(loggedIn !== "true"){
        return <Navigate to='/signin' replace/>
    }
    return <Outlet/>
}

export default Authenticator
