import iconReady from "../img/cena.png"
import { getOrder } from "../../request";
import OnlyOrder from "./OnlyOrder";
import { useState, useEffect, React } from "react";

// const OrderList = () => {
//     const [orders1, setOrders1] = useState([]);

//     const getOrders = async () => {
//         const orders = await getOrder()
//         console.log('orders', orders)
//         setOrders1(orders);
//     };

//     useEffect(() => {
//         getOrders();
//     }, []);

//     return (
//         <>
//             {orders1.map((order) => (
//                 <div className="bodyList" key={order.id}>
//                     <div className="TopBodyListoOrder">
//                         <p>Pedido: 5</p>
//                         <p>{order.dateEntry}</p>
//                     </div>
//                     <p className="toClient">Para: {order.client}</p>
//                     <div className="BodyOrder">
//                         {/* <OnlyOrder orders={orders1} /> */}
//                         {orders1.map((order) => (
//                             <div className="dataOfOrder" key={order.id}>
//                                 {orders1.map((product) => (
//                                     <React.Fragment key={product.id}>
//                                         <p>{product.product.name}</p>
//                                         <p>{product.qty}</p>
//                                     </React.Fragment>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                     <img width="40px" src={iconReady} alt="icono-listo" />
//                 </div>
//             ))}
//         </>
//     )
// };

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const fetchedOrders = await getOrder();
        setOrders(fetchedOrders);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            {orders.map((order) => (
                <div className="bodyList" key={order.id}>
                    <div className="TopBodyListoOrder">
                        <p>Pedido: 5</p>
                        <p>{order.dateEntry}</p>
                    </div>
                    <p className="toClient">Para: {order.client}</p>
                    <div className="BodyOrder">
                        {/* {orders.map((product) => ( */}
                        <div className="dataOfOrder">
                            <p>{order.id}</p>
                        </div>
                        {/* ))} */}
                    </div>
                    <img width="40px" src={iconReady} alt="icono-listo" />
                </div>
            ))}
        </>
    );
};


export default OrderList;