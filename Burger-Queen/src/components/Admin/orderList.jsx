import iconReady from "../img/cena.png"
import { getOrder } from "../../request";
import OnlyOrder from "./OnlyOrder";
import { useState, useEffect } from "react";

const OrderList = () => {
    const [orders1, setOrders1] = useState([]);

    const getOrders = async () => {
        const orders = await getOrder()
        console.log('orders', orders)
        setOrders1(orders);
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <>
            {orders1.map((order) => (
                <div className="bodyList" key={order.id}>
                    <div className="TopBodyListoOrder">
                        <p>Pedido: 5</p>
                        <p>{order.dateEntry}</p>
                    </div>
                    <p className="toClient">Para: Lucía</p>
                    <div className="BodyOrder">
                        <OnlyOrder orders={order.products} />
                    </div>
                    <img width="40px" src={iconReady} alt="icono-listo" />
                </div>
            ))}
        </>
    )
};

export default OrderList;