import "./css-pages/staff.css"
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";




const Worker = (props) => {

    return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Id</th>
        //             <th>Correo</th>
        //             <th>Rol</th>
        //         </tr>
        //     </thead>
        //     <tbody>
                <tr>
                    <td className="worker-rol">{props.id}</td>
                    <td className="worker-email">{props.correo}</td>
                    <td className="worker-rol">{props.contraseña}</td>
                    {/* <td className="worker-rol">{props.rol}</td> */}

                </tr>
        //     </tbody>
        // </table>

    )
}







export default function Staff() {
    const [trabajadores, setTrabajadores] = useState([]);

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
    console.log(trabajadores)
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

           {/*------------ tabla de trabjadores---------------------- */}
                <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Correo</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                { trabajadores.map((trabajador) => {
                    return (
                        <Worker key={trabajador.id}
                            correo={trabajador.email}
                            rol={trabajador.role}
                            // contraseña={trabajador.password}

                        />
                    )
                })}
                 </tbody>
        </table>
            

        </div>)
}



