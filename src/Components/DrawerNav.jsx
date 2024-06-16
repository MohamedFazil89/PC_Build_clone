import React from "react";
import { NavData } from "./NavData";
import './styles/DrawerNav.css'
import { RiCloseLine } from "react-icons/ri";




function Drawer(props){
    return(
        <nav className={props.cName}>
            {/* <ul onClick={props.CloseNav}></ul> */}
            <ul>
            <li onClick={props.CloseNav} className="close"><RiCloseLine size={30} /></li>
                {NavData.map((item,index) =>{
                    return(
                        <li key={index} className="lis">{item.title}</li>
                    )
                })}

            </ul>
        </nav>

    )
}

export default Drawer;