import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOrdenes } from "../service.auth.js";
import {FaSignOutAlt} from "react-icons/fa"
const Order = (props) => {

    return (
        <>
            <div className="hora-pedido">hora de pedido:{props.hora}</div>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.nombre}</td>
                        <td>{props.cantidad}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}




export default function Kitchen() {
    const [orders, setOrders] = useState([]);

    const getOrdersKitchen = async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.accessToken;

        const ordenes = await getOrdenes(token);
        setOrders(ordenes);
        console.log(orders);
    }
    useEffect(() => {
        getOrdersKitchen();

    }, []);
    //después del primer render y solo 1 vez ejecutará mi función traerProductos


    return (
        <div className="take-order-page">
             <div className="staff-h2">
                <h2>Pedidos</h2>
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


            {
            orders.map((order) => {
                // order.products.map(product=>console.log(product))

                return (
                    <Order key={order.id}
                        // nombre={order.products.product.name}
                        // cantidad={order.products.qty}

                        hora={order.dateEntry}
                        nombre={order.client}
                    />
                )

            })}


        </div>);

}
