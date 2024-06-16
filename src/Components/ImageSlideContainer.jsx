import React from "react";
import './styles/slide.css';

function SlideContainer(props) {
    return (
        <div className="Grid-image">
            {props.array.map((item, index) => {
                return (
                    <img key={index} src={item} alt="images1"  />

                )
            })}
        </div>
    );
}

export default SlideContainer;