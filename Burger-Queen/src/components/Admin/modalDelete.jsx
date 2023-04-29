import exitIcon from "../img/exitIcon.png"
import { deleteProduct, GetProducts } from "../../request";


const ModalDelete = ({ estado, cambiarEstado, onUpdateProducts }) => {

    const id = localStorage.getItem("productId");

    const handleDeleteProduct = async () => {
        await deleteProduct(id);
        cambiarEstado(false);
        localStorage.removeItem("productId");
    };

    const handleDelete = async () => {
        await handleDeleteProduct();
        cambiarEstado(false);
        const data = await GetProducts();
        const newProducts = data.filter((product) => product.id !== id);
        await onUpdateProducts(newProducts);
    };

    return (
        <div>
            {estado &&
                <div className="overlay" >
                    <div className="bodyOfModalDelete">
                        <div>
                            <img className="exitModalDelete" onClick={() => cambiarEstado(false)} className="exitIcon" src={exitIcon} />
                        </div>
                        <p>¿Estás segura(o) que quieres eliminar este producto del inventario?</p>
                        <button
                            className="buttonDeleteModal"
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
