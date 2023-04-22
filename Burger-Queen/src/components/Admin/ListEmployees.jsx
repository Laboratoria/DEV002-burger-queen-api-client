import deleteEmployee from "../img/deleteEmployee.png"
import editar from "../img/editar.png"
import employee from "../img/employee.jpg"

const ListEmployees = () => {
    return (
        <div className="containEmployee">

            <div className="containerDataButtons">
                <div className="dataEmployees">
                    <div className="toLeft">
                     <p>Puesto: Cocinero</p>
                    <p>Correo: arielknm@gamil.com</p>
                    <p>Contraseña: dbjh34bh</p>   
                    </div>
                    
                </div>

                <div className="containerIcons">
                    <img className="deleteEmployeeImg" src={deleteEmployee}></img>
                    <img className="editEmployeeImg" src={editar}></img>
                </div>

            </div>

            <div className="containImgEmployee">
                <img className="imgEmployee" src={employee}></img>
                <p className="nameEmployee">Jin</p>
            </div>

        </div>
    )
}

export default ListEmployees;