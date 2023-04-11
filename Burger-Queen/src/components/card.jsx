import React from "react";
import trash from "./img/basura.png";
import edit from "./img/editar.png";

const Card = ({name, image, price}) => {

    
    return (
        <div className="card">
            <div className="card-tittle">{name}</div>
            <img className="img-card" src={image} ></img>
            <p className="price">{price}</p>
            <div className="card-Body">
                <img className="trash" src={trash}></img>
                <img className="edit" src={edit}></img>
            </div>
        </div>
    )
}

export default Card;