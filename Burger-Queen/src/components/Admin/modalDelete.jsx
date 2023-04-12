import exitIcon from "../img/exitIcon.png"


const ModalDelete = ({ estado, cambiarEstado }) => {
    return (
        <div>
            {estado && 
            <div className="overlay" >
            <div className="bodyOfModal">
                <img id="exit" onClick={() => cambiarEstado(false)} className="exitIcon" src={exitIcon} />
                <p>¿Estás segura(o) que quieres eliminar este producto?</p>
                <button type="submit">Eliminar producto</button>
            </div>
        </div>
            }
        </div>
        
    )
}

export default ModalDelete;
