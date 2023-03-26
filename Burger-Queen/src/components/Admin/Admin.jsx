import Logotype from "./logotype.jsx";
import NavigationBar from "./navigationBar.jsx";
import IconsOrders from "./iconsOrders.jsx";
import Cards from "../cards.jsx"
import { getProducts } from "../../request.js";



const Admin = () => {
    const token = localStorage.getItem("token");
    const verify = async () => {
        try {
            const response = await getProducts();
            console.log('token', token);
            console.log('response', response);
            // if (response.)
        }
        catch (error) {
            console.log(error)
        }
    }

    verify()

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
                        <div className="bar">
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin;
