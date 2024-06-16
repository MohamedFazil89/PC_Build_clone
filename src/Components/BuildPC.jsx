import React from "react";
import './styles/buildpc.css'
import { IoIosAddCircle } from "react-icons/io";




export default function BuildPC(props){
    return (
        <div className="pc parts">
            <h1 className="part name">{props.name}</h1>
            <button className="select"><IoIosAddCircle /></button>
        </div>
    )
}