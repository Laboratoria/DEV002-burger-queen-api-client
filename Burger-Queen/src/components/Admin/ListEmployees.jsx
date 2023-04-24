import deleteEmployee from "../img/deleteEmployee.png"
import editar from "../img/editar.png"
import employee from "../img/employee.jpg"

const ListEmployees = ({users}) => {
    return (
        <>
            {users.map((user) => (
                <div className="containEmployee" key={user.id}>

                    <div className="containerDataButtons" style={{ background: user.role === "waiter" ? "#58f254" : "" }}>
                        <div className="dataEmployees">
                            <div className="toLeft">
                                <p>Puesto: {user.role}</p>
                                <p>Correo: {user.email}</p>
                                <p>Contraseña: {user.password}</p>
                            </div>
                        </div>

                        <div className="containerIcons">
                            <img className="deleteEmployeeImg" src={deleteEmployee}></img>
                            <img className="editEmployeeImg" src={editar}></img>
                        </div>

                    </div>

                    <div className="containImgEmployee">
                        <img className="imgEmployee" src={user.image}></img>
                        <p className="nameEmployee" style={{ color: user.role === "waiter" ? "#58f254" : "" }}>Jin</p>
                    </div>

                </div>
            ))}
        </>
    )
}

export default ListEmployees;