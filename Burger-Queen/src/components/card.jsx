import React from "react";
import trash from "./img/basura.png";
import edit from "./img/editar.png";

const Card = () => {

    return (
        <div className="card">
            <div className="card-tittle">tittle</div>
            <img className="img-card" ></img>
            <div className="card-Body">
                <img className="trash" ></img>
                <img className="edit" ></img>
            </div>
        </div>
    )
}

export default Card;