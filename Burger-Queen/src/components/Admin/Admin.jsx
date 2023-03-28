import Logotype from "./logotype.jsx";
import NavigationBar from "./navigationBar.jsx";
import BotonsFilter from "../botonsFilter.jsx";
import Cards from "../cards.jsx"
import add from "../img/add.png"
// import Products from "../pueba.jsx";


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
                        <div className="buttonsProducts">
                            <div className="botonsFilter"><BotonsFilter /></div>
                            <div className="addProduct">
                                <img className="add" src={add}></img>
                                <p className="textButtonAdd">Agregar producto</p>
                            </div>
                        </div>
                        {/* <div className="bar">
                            <Cards />
                        </div> */}
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin;
