import "./css-pages/staff.css"
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaPlusSquare, FaTrash, FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addNuevoTrabajador, deleteTrabajador } from "../service.auth";


const Worker = (props) => {

const EliminarTrabajador = async(idUser)=>{
    const user = JSON.parse(localStorage.getItem('user'))
        const token = user.accessToken;
        const resp=await deleteTrabajador(token, idUser);
        

}

const ActualizarTrabajador = (props) =>{
    console.log("actualizando al trabajador")
}


    return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Id</th>
        //             <th>Correo</th>
        //             <th>Rol</th>
        //         </tr>
        //     </thead>cd
        //     <tbody>
        <tr>
            <td className="worker-rol">{props.id}</td>
            <td className="worker-email">{props.correo}</td>
            <td className="worker-contraseña">{props.rol}</td>
            <td className="worker-rol">{props.contraseña}</td>
            <td><FaTrash className="flow-icon" size={"1rem"} color="black"  onClick={()=>EliminarTrabajador(props.id)}/></td>
            <td><FaEdit className="flow-icon" size={"1rem"} color="black" onClick={()=>ActualizarTrabajador(props.id)}/></td>


        </tr>
        //     </tbody>
        // </table>

    )
}




export default function Staff() {
    const [trabajadores, setTrabajadores] = useState([]);
    const [addTrabajador, setAddTrabajador] = useState(false);

    const [email, setEmail] = useState('');
    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };

    const [password, setPassword] = useState('');
    const handlePasswordChange = ({ target }) => {
        setPassword(target.value);
    };

    const [role, setRole] = useState('');
    const handleRoleChange = ({ target }) => {
        setRole(target.value);
    };

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.accessToken;
        fetch('http://localhost:8080/users', {
            method: 'GET', //no lleva body
            headers: {
                "Content-Type": "application/json",

                "Authorization": "Bearer " + token   //sin paréntesisis. Para tener acceso para el resto de rutas
            },

        })
            .then(res => {
                //console.log(res)
                return res.json()
            })
            .then(res => {

                console.log('res', res)
                setTrabajadores(res);
            })
            .catch(error => {
                console.log(error, error.response, "Error al traer los trabajadores")
            });


    }, [])
    // console.log(trabajadores)


    const crearUsuario = () => {
        setAddTrabajador(true);
    }
    const closeModal = () => {
        setAddTrabajador(false);
        setEmail("");
        setPassword("");
        setRole("")
    };
    const createWorker =async()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.accessToken;
    const resp =await addNuevoTrabajador(token, email, password, role);
    console.log(resp);
    setAddTrabajador(false);
}
    return (
        <div className="staff-page">
            <div className="staff-h2">
                <h2>Trabajadores</h2>
                <div className="log-out">
                    <Link to="/">
                        <FaSignOutAlt className="flow-icon" size={"2rem"} />
                    </Link>
                </div>
            </div>
            <div className="botones-menu">
                <button><Link to="/staff"> Trabajadores </Link></button>
                <button><Link to="/products"> Productos</Link></button>
            </div>

            {/*------------  agregar un nuevo trabajador---------------------- */}

            <button className="btn-add-worker"><FaPlusSquare className="flow-icon" size={"2rem"} onClick={crearUsuario} />crear usuario</button>

            {addTrabajador ? (
                <div className="modal-container">
                    <div className="input-nuevo-trabajador">
                        <label>Correo:
                            <input
                                type="email"
                                name="email"
                                className="input-add-worker"
                                // placeholder="Email..."
                                value={email}
                                onChange={handleEmailChange}
                            ></input>
                        </label>
                    </div>
                    {/* <div className="modal-body"> */}
                    <div className="input-nuevo-trabajador">
                        <label>Clave:
                            <input
                                type="password"
                                name="password"
                                className="input-add-worker"
                                // placeholder=""
                                value={password}
                                onChange={handlePasswordChange}
                            ></input>
                        </label>
                    </div>
                    <div className="input-nuevo-trabajador">
                        <label>Role:
                            <input
                                type="text"
                                name="role"
                                className="input-add-worker"
                                // placeholder="rol..."
                                value={role}
                                onChange={handleRoleChange}
                            ></input>
                        </label>
                    </div>
                    <button
                        type="button"
                        className="btn-save-worker"
                     onClick={() => createWorker()}
                    >
                        Guardar
                    </button>
                    <button
                        onClick={closeModal}
                        type="button"
                        className="btn-cancel-worker"
                        id="botonCancelar"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <p></p>
            )}

            {/*------------ tabla de trabjadores---------------------- */}
            <table id='table-workers'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Contraseña</th>
                        <th>Eliminar</th>
                        <th>Editar</th>

                    </tr>
                </thead>
                <tbody>
                    {trabajadores.map((trabajador) => {
                        
                        return (
                            <Worker key={trabajador.id}
                                correo={trabajador.email}
                                rol={trabajador.role}
                                id={trabajador.id}
                                contraseña='******'

                            />
                        )
                    })}
                </tbody>
            </table>


        </div>)
}



