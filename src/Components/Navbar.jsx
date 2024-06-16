import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
// import Drawer from "./DrawerNav";
import './styles/Navbar.css'


function Navbar(props) {
   
    return (
        <nav className="NavBar">
            <ul className="icon">
                <li><BiMenuAltRight size={50} className="icon" onClick={props.ShowNav}/></li>


            </ul>

            <ul className="Auth">
                <li>Login</li>
                <li>Register</li>
            </ul>

        </nav>
    )
}

export default Navbar;
