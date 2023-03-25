import "./css-pages/staff.css"
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logOut } from "../service.auth";


export default function Products() {


    return (
        <div className="staff-page">
            <div className="staff-h2">
                <h2>Productos</h2>
                <div className="log-out">
                    <Link to="/" >
                        <FaSignOutAlt className="flow-icon" size={"2rem"} />
                    </Link>
                </div>
            </div>
            <div className="botones-menu">
            <button><Link to="/staff"> Trabajadores </Link></button>              
               <button><Link to="/products"> Productos</Link></button>          
            </div>
        </div>
    )

}
