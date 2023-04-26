import OnlyOrder from "./OnlyOrder";
import iconReady from "../img/cena.png"

const OrderList = () => {
    return (
        <div className="bodyList">
            <div className="TopBodyListoOrder">
                <p>Pedido: 5</p>
                <p>3:20</p>
            </div>
            <p className="toClient">Para: Lucía</p>
            <div className="BodyOrder">
                <OnlyOrder />
                <OnlyOrder />
                <OnlyOrder />
            </div>
            <img width="40px" src={iconReady}></img>
        </div>
    )
}

export default OrderList;