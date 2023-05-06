const OnlyOrder = ({ orders }) => {
    return (
        <>
            {orders.map((order) => (
                <div className="dataOfOrder">
                    <img width="20px" height="20px" src={order.product.image} alt="imagen-del-producto" />
                    <p>{order.product.name}</p>
                    <p>{order.qty}</p>
                </div>
            ))}
        </>
    )
};

export default OnlyOrder;