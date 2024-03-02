import React, { StrictMode, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './Pages/Home.js'
import Helpline from './Pages/Helpline.js'
import Docs from './Pages/Docs.js'
import Header from './Components/Header.js'
import './style.css'
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js'
import AuthRequired from './Components/AuthRequired.js'
import { Toaster } from 'react-hot-toast'

function App()
{  
    const [loggedIn,setLoggedIn] = useState(false)

    return <BrowserRouter>
        <Header/>
        <Toaster 
            position='top-center'
            reverseOrder={false}
        />
        <Routes>
            <Route path='/helpline' element={<Helpline />} />
            <Route path='/docs' element={<Docs />} />
            <Route  element={<AuthRequired loggedIn={loggedIn}/>}>
                <Route path='/' element={<Home setLoggedIn={setLoggedIn}/>}/>
            </Route>
            <Route path='/signup' element={<SignUp  setLoggedIn={setLoggedIn} />}/>
            <Route path='/login' element={<Login  setLoggedIn={setLoggedIn} />}/>
        </Routes>
    </BrowserRouter>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)