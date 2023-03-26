import React from "react";
import trash from "./img/basura.png";
import edit from "./img/editar.png";
import axios from "axios";

const token = localStorage.getItem("token");
const getData = async () => {

        const urlBurguerApi = "http://localhost:8080/products";

        await axios.get(urlBurguerApi, {
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        })
            .then((response) => {
            const data = response.data;
            console.log(data);
        });
    };

    getData();

const Card = ({name, image}) => {

    
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