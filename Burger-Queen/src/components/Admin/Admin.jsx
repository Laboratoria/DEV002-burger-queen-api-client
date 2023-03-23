import Logotype from "./logotype.jsx";
import NavigationBar from "./navigationBar.jsx";

const Admin = () => {
    return (
        <><div className="logotype">
            <Logotype />
        </div>
        <div className="admiContainer">
            <div className='navigationBar'><NavigationBar /></div>
            <div className="cards"></div>
        </div>
        <h1>Hola admin </h1></>
    )
}

export default Admin;
