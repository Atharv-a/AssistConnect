import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Helplines from "./pages/Helplines"
import HelpDocs from "./pages/HelpDocs"
import Home from "./pages/Home"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Authenticator from "./Components/Authenticator"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme"
import { Toaster } from "react-hot-toast"

function App() {
  return <>
          <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Toaster
                position='top-center'
                reverseOrder={false}
            />
            <Header />
            <Routes>
                <Route element={<Authenticator/>}>
                  <Route path='/' element={<Home />}/>
                </Route>
                <Route path='helplines' element={<Helplines />}/>
                <Route path='docs' element={<HelpDocs />}/>
                <Route path='signin' element={<SignIn />}/>
                <Route path='signup' element={<SignUp />}/>
            </Routes>
          </ThemeProvider>
          </BrowserRouter>
        </>
}

export default App
