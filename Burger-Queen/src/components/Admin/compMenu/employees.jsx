import NavigationBar from "../navigationBar";
import Logotype from "../logotype";
import '../../../estilos/admin/navigationBar.css'
import ContainerBottonsAndList from "../../containerBottonsLAndist";
import ModalAddUsers from "../modalAddUser";
import ModalEditUsers from "../ModalEditUser";
import ModalDeleteUser from "../ModalDeleteUser";
import { useState } from "react";

const Employees = () => {
    // Lógica para abrir y cerrar el modal para agregar un nuevo usuario
    const [estadoModalAdd, cambiarEstadoModalAdd] = useState(false);
    // Lógica para abrir y cerrar el modal para editar a un usuario
    const [modalEditing, setmodalEditing ] = useState(false);
    // Lógica para abrir y cerrar el modal para eliminar a un usuario
    const [modalDelete, setModalDelete] = useState(false);

    return (
        <div className="container">

            <div className="logotype">
                <Logotype />
            </div>

            <div className="admiContainer">
                <div className="navigationBar">
                    <NavigationBar />
                </div>

                <div className="cards">
                    <div className="buttonsProducts">
                        <ContainerBottonsAndList
                            handleAddClick={() => cambiarEstadoModalAdd(!estadoModalAdd)}
                            onClickEditUser={() => setmodalEditing(!modalEditing)}
                            onClickDeleteUser={() => setModalDelete(!modalDelete)}
                        />
                    </div>
                    <ModalAddUsers
                        estado={estadoModalAdd}
                        cambiarEstado={cambiarEstadoModalAdd}
                    />
                    <ModalEditUsers
                    estado={modalEditing}
                    cambiarEstado={setmodalEditing}
                    />
                    <ModalDeleteUser
                    estado={modalDelete}
                    cambiarEstado={setModalDelete}
                    />

                    
                </div>

            </div>

        </div>
    )
}

export default Employees;