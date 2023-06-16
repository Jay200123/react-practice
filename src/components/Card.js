import React from "react";

function Card(data){
    console.log(data)

    return(
        <div className="card-container">
            <div className="card-text">
            <img className="card-img" src={data.images} alt="Card Test"/>
            <p className="bold">{data.header}</p>
            <p>{data.text}</p>
            </div>
        </div>
    )
}

export default Card