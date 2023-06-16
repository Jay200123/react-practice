import React from "react";
import background from "../images/background3.jpg"
function Content(){

    return(
        <div className="container">
            <img className="background-img" src={background} alt="Automotive Background"/> 

            <div className="container-content">
            <h2 className="container-header">Bachelor of Engineering Technology Major in Automotive Technology</h2>
            <p className="container-text">The Bachelor of Engineering Technology (BET) majoring in Automotive Technology is an undergraduate degree program that focuses on preparing students for careers in the automotive industry. It combines elements of engineering and technology to provide a comprehensive understanding of automotive systems, design, manufacturing, and maintenance.</p>
            </div>
        </div>
    )
}

export default Content