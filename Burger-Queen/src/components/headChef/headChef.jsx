import Logotype from "../Admin/logotype";
import NavigationBarHeadChef from "./NavigationBarHeadChef";
import IconsOrders from "../Admin/IconsOrders";
import OrderList from "../Admin/orderList";

const HeadChef = () => {
    return (
        <>
            <div className="container">
            <div className="logotype">
                <Logotype />
            </div>
            <div className="admiContainer">
                <div className="navigationBar">
                    <NavigationBarHeadChef />
                </div>
                <div className="cards">
                    <div>
                        <IconsOrders />
                    </div>
                    <div className="gridOrders">
                        <OrderList />
                    </div>
                </div>
            </div>
        </div>

        </>
    )
};

export default HeadChef;