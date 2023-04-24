import NavigationBar from "../navigationBar";
import Logotype from "../logotype";
import '../../../estilos/admin/navigationBar.css'
import ContainerBottonsAndList from "../../containerBottonsLAndist";
import ModalAddUsers from "../modalAddUser";
import { useState } from "react";

const Employees = () => {
    // Lógica para abrir y cerrar el modal para agregar un nuevo usuario------------------------------
    const [estadoModalAdd, cambiarEstadoModalAdd] = useState(false);

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
                        />
                    </div>
                    <ModalAddUsers
                        estado={estadoModalAdd}
                        cambiarEstado={cambiarEstadoModalAdd}
                    />

                </div>

            </div>

        </div>
    )
}

export default Employees;