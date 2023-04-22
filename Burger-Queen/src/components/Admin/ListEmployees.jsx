import deleteEmployee from "../img/deleteEmployee.png"
import editar from "../img/editar.png"
import employee from "../img/employee.jpg"

const ListEmployees = () => {
    return (
        <div>

            <div>
                <p>Puesto: Chef</p>
                <p>Correo: arielknm@gamil.com</p>
                <p>Contraseña: dbjh34bh</p>
                <div>
                    <img className="deleteEmployeeImg" src={deleteEmployee}></img>
                    <img className="editEmployeeImg" src={editar}></img>
                </div>
            </div>

            <div>
                <img className="imgEmployee" src={employee}></img>
            </div>
            
        </div>
    )
}

export default ListEmployees;