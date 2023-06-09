import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOrdenes } from "../service.auth.js";
import { FaSignOutAlt } from "react-icons/fa"
import "./css-pages/kitchen.css"

const Order = (props) => {
    const { nombre, hora, productos, idOrden, handleOrderCheck } = props;

    const [isChecked, setIsChecked] = useState(false);
    const [ordersPrepared, setOrdersPrepared] = useState([]);
    let ordenesPreparadas=[];

    console.log(ordenesPreparadas)


    return (
        <>
            {/* <div className="hora-pedido">hora de pedido:{idOrden}</div> */}
            <table>
                <thead>
                    <tr>
                    <th>creación: {hora}</th>

                        <th>cliente: {nombre}</th>
                        <th><input type="checkbox"
                            className="checkbox"
                            checked={isChecked}
                            onChange={handleOrderCheck}
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


    const handleOrderCheck = (idOrden) => {
        let llamarmesero= confirm("¿llamar al mesero para que sirva a la mesa el pedido?");
        if(llamarmesero){
        setOrders((prevOrders) => {
          return prevOrders.filter((order) => order.id !== idOrden);
        });
      };}

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
                <button><Link to="/kitchen-served"> servidos </Link></button>
            </div>


            <section className="ordenes">
                {
                    orders.map((order) => {

                        return (
                            <Order key={order.id}
                                // nombre={order.products.product.name}
                                // cantidad={order.products.qty}
                                productos={order.products}
                                hora={order.dateEntry}
                                nombre={order.client}
                                idOrden={order.id}
                                handleOrderCheck={() => handleOrderCheck(order.id)}

                            />
                        )

                    })}
            </section>

        </div>);

}
