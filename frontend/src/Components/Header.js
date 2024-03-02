import { Link } from "react-router-dom"

export default function Header()
{
    return <header>
        <h1>AssistConnect</h1>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/helpline'>Helpline</Link>
            <Link to='/docs'>HelpDocs</Link>
        </nav>
    </header>
}