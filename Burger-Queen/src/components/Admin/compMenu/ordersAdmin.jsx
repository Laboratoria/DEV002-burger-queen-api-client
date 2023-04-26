import Logotype from "../logotype";
import React from "react";
import NavigationBar from "../navigationBar";
import IconsOrdes from "../IconsOrders";
import OrderList from "../orderList";

const OrdersAdmin = () => {
    return (
        <div className="container">
            <div className="logotype">
                <Logotype />
            </div>
            <div className="admiContainer">
                <div className="navigationBar">
                    <NavigationBar />
                </div>
                <div className="cards">
                    <div className="buttonsOrders">
                        <IconsOrdes />
                    </div>
                    <div>
                        <OrderList />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrdersAdmin;