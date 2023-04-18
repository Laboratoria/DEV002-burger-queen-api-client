import exitIcon from "../img/exitIcon.png"
import React, { useState } from 'react';
import axios from 'axios';
import { deleteProduct } from "../../request";

const ModalDelete = ({ estado, cambiarEstado,onClickDeleteProduct, id,setShowModal }) => {


    const handleDelete = async () => {
        await onClickDeleteProduct(id);
        setShowModal(false);
        cambiarEstado(false);
      };

    
    return (
        <div>
            {estado && 
            <div className="overlay" >
            <div className="bodyOfModal">
                <img id="exit" onClick={() => cambiarEstado(false)} className="exitIcon" src={exitIcon} />
                <p>¿Estás segura(o) que quieres eliminar este producto?</p>
                <button className="buttonDeleteModal" 
                type="button"  
                onClick={handleDelete}
                >Eliminar producto</button>
            </div>
        </div>
            }
        </div>
        
    )
}

export default ModalDelete;
