import React from "react";
import burger from "./img/hamburguesa.png"
import trash from "./img/basura.png"
import edit from "./img/editar.png"



const Card = () => {
    return (
        <div className="card">
            <div className="card-tittle">MY TITTLE</div>
            <img className="img-card" src={burger}></img>
            <div className="card-Body">
               <img className="trash" src={trash}></img>
               <img className="edit" src={edit}></img>
            </div>
        </div>
    )
}

export default Card;