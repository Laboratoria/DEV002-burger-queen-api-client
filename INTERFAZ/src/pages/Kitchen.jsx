import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOrdenes } from "../service.auth.js";
import { FaSignOutAlt } from "react-icons/fa"
import "./css-pages/kitchen.css"

const Order = (props) => {
    const { nombre, cantidad, hora, productos } = props;
    return (
        <>
            <div className="hora-pedido">hora de pedido:{hora}</div>
            <table>
                <thead>
                    <tr>
                        <th>{nombre}</th> 
                         <th><input type="checkbox"
                            className="checkbox"
                        /></th>

                    </tr>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => {
                            console.log(producto)
                            return (
                                <tr key={producto.product.id}>
                                    <td>{producto.product.name}</td>
                                    <td>{producto.qty}</td>
                                </tr>
                            )
                        })
                    }

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

        // const productos = ordenes.map(orden => orden.products)
        // console.log(productos)

    }
    useEffect(() => {
        getOrdersKitchen();

    }, []);
    //después del primer render y solo 1 vez ejecutará mi función traerProductos


    return (
        <div className="kitchen-page">
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

                    return (
                        <Order key={order.id}
                            // nombre={order.products.product.name}
                            // cantidad={order.products.qty}
                            productos={order.products}
                            hora={order.dateEntry}
                            nombre={order.client}
                        />
                    )

                })}


        </div>);

}
