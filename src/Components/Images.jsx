import React from "react";
import './styles/images.css'
import src from './assets/RGB_TOP_END_GAM_e934a2fa-f055-407f-a5c8-5b3b6bfcdc21-removebg-preview.png'
import Button from "./Button";

function Images(props) {
    return (
       <> 
        <div className="intro">

            <div className="text">
                <h1>Build your <span>Dream</span> PC with Us</h1>
                <p> Best PC Build Shop in <span>Thane</span>. Assemble your best desired PC online for gaming, work station, professional pc with specifications tailored to your use case and Build Your Custom Pc with Computech Store. we also provide on-site support and <span>lifetime</span> tech support with all your pc builds
                </p>
                <Button />

            </div>
            <div className="imgs">
                <img src={src} alt="game" />

            </div>

        </div>

        </>
    );
}

export default Images;