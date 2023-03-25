import React from "react";
import burger from "./img/hamburguesa.png"
import trash from "./img/basura.png"
import edit from "./img/editar.png"
import products from "../../../../burger-queen-api-mock/db.json"


const Card = ({name, image}) => {
    console.log({name})
    return (
        <div className="card">
            <div className="card-tittle">{name}</div>
            <img className="img-card" src={image}></img>
            <div className="card-Body">
               <img className="trash" src={trash}></img>
               <img className="edit" src={edit}></img>
            </div>
        </div>
    )
}

export default Card;