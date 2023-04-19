import exitIcon from "../img/exitIcon.png"
import { deleteProduct } from "../../request";

const ModalDelete = ({ estado, cambiarEstado }) => {
    const id = localStorage.getItem("productIdToDelete");

    const handleDeleteProduct = async () => {
        deleteProduct(id);
        cambiarEstado(false);
        localStorage.removeItem("productIdToDelete");
    };

    return (
        <div>
            {estado &&
                <div className="overlay" >
                    <div className="bodyOfModal">
                        <img id="exit" onClick={() => cambiarEstado(false)} className="exitIcon" src={exitIcon} />
                        <p>¿Estás segura(o) que quieres eliminar este producto del inventario?</p>
                        <button
                            className="buttonDeleteModal"
                            type="button"
                            onClick={handleDeleteProduct}
                        >Eliminar producto</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ModalDelete;
