
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"
import React, { useEffect, useState } from "react";
import { Order } from "./Kitchen";

// const OtherComponent = () => {
//     const [savedOrders, setSavedOrders] = useState([]);

//     useEffect(() => {
//         const ordersData = localStorage.getItem("orders");
//         if (ordersData) {
//             const parsedOrders = JSON.parse(ordersData);
//             setSavedOrders(parsedOrders);
//         }
//     }, []);

//     // Resto del código...

//     return (
//         <div>
//             {savedOrders.map((order) => {
//                 // Renderiza los hijos que desaparecieron de la pantalla
//                 return (
//                     <Order key={order.id}
//                         // nombre={order.products.product.name}
//                         // cantidad={order.products.qty}
//                         productos={order.products}
//                         hora={order.dateEntry}
//                         nombre={order.client}
//                         idOrden={order.id}
//                         handleOrderCheck={() => handleOrderCheck(order.id)}

//                     />
//                 )
//             })}
//         </div>
//     );

// };



export default function KitchenServed() {

    const [savedOrders, setSavedOrders] = useState([]);

    useEffect(() => {
        const ordersData = localStorage.getItem("orders");
        if (ordersData) {
            const parsedOrders = JSON.parse(ordersData);
            setSavedOrders(parsedOrders);
        }
    }, []);


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
                <section className="ordenes">
                {savedOrders.map((order) => {
                // Renderiza los hijos que desaparecieron de la pantalla
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
            </div>
        </>
    )
}
