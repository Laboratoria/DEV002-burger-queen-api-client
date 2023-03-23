import Logotype from "./logotype.jsx";
import NavigationBar from "./navigationBar.jsx";
import IconsOrders from "./iconsOrders.jsx";

const Admin = () => {
    return (
        <>
        <div className="container">
        <div className="logotype">
            <Logotype />
        </div>
        <div className="admiContainer">
            <div className='navigationBar'><NavigationBar /></div>
            <div className="cards">
                <div className="iconsOrders"><IconsOrders /></div>
            </div>
        </div>    
        </div>
        
        </>
    )
}

export default Admin;
