import exitIcon from "../img/exitIcon.png"
import { deleteUser } from "../../request";

const ModalDeleteUser = ({estado, cambiarEstado}) => {
    const id = localStorage.getItem("userId");

    const handleDeleteProduct = async () => {
        await deleteUser(id);
        cambiarEstado(false);
        localStorage.removeItem("userId");
    };

    // const handleDelete = async () => {
    //     await handleDeleteProduct();
    //     const data = await GetProducts();
    //     const newProducts = data.filter((product) => product.id !== id);
    //     await onUpdateProducts(newProducts);
    // };

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
export default ModalDeleteUser;