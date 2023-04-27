import decrease from "../img/decrease.png"
import increase from "../img/increase.png"
import cancel from "../img/cancel.png"
import CardProductWaiter from "./CardProductWaiter.jsx"

const OrderTaked = () => {
    return( 
        <div className="orderTaked">
            <div className="descriptionProduct">
                <CardProductWaiter />
                {/* Aquí va la carta que se eligió */}
            </div>
            <div>
                <p className="nameProductOrder">Taco</p>
                <p className="price">S/ 8</p>
            </div>
            <div>
                <img className="iconOrderTaked" width={'25px'} src={decrease}></img>
                <p>2</p>
                <img className="iconOrderTaked" width={'25px'} src={increase}></img>
            </div>
            <div>
                <img className="iconOrderTaked" width={'25px'} src={cancel}></img>
            </div>
        </div>
    )
};

export default OrderTaked;