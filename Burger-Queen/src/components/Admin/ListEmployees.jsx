import deleteEmployee from "../img/delete-user.png"
import editar from "../img/editar.png"

const ListEmployees = ({users, onClickEditUser, onClickDeleteUser}) => {

    const handleEditClick = (id) => {
        onClickEditUser(id);
        localStorage.setItem("userId", id)
    };

    const handleDeleteClick = (id) => {
        onClickDeleteUser(id);
        localStorage.setItem("userId", id)
    };

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
                            <img className="deleteEmployeeImg" src={deleteEmployee} onClick={() => {handleDeleteClick(user.id)}}></img>
                            <img className="editEmployeeImg" src={editar} onClick={() => handleEditClick(user.id)}></img>
                        </div>

                    </div>

                    <div className="containImgEmployee">
                        <img className="imgEmployee" src={user.image}></img>
                        <p className="nameEmployee" style={{ color: user.role === "waiter" ? "#58f254" : "" }}>{user.name}</p>
                    </div>

                </div>
            ))}
        </>
    )
}

export default ListEmployees;