import { getOrder } from "../../request";
import { useState, useEffect } from "react";

const OnlyOrder = () => {

    const [orders, setOrders] = useState([])
    const getOrders = async () => {
        const getorders = await getOrder()
        setOrders(products);
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <>
            {orders.map((order) => (
                <div className="dataOfOrder" key={order.id}>
                    {orders.map((product) => (
                        <React.Fragment key={product.id}>
                            <p>{product.product.name}</p>
                            <p>{product.qty}</p>
                        </React.Fragment>
                    ))}
                </div>
            ))}

        </>
    )
};


export default OnlyOrder;