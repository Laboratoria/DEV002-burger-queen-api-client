
import { Link } from "react-router-dom";
import {FaSignOutAlt} from "react-icons/fa"


export default function KitchenServed() {

    return (
        <>
            <div className="take-order-page">
                <div className="staff-h2">
                    <h2>Pedidos Preparados</h2>
                    <div className="log-out">
                        <Link to="/" >
                            <FaSignOutAlt className="flow-icon" size={"2rem"} />
                        </Link>
                    </div>
                </div>
                <div className="botones-menu">
                    <button><Link to="/kitchen"> pendientes </Link></button>
                    <button><Link to="/kitchen-served"> realizados </Link></button>
                </div>
            </div>  </>
    )
}
