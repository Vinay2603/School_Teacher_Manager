import "./Navbar.css"
import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <div className="outerNavbar">
    
            <h1>School Teacher Manager</h1>

            <div className="bold"><Link to="/" style={{textDecoration: "none"}}>LOGIN</Link></div>
           
           
        </div>
    )
}