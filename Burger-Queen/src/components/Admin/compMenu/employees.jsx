import NavigationBar from "../navigationBar";
import Logotype from "../logotype";
import '../../../estilos/admin/navigationBar.css'


const Employees = () => {
    return (
        <div className="container">
            <div className="logotype">
                <Logotype />
            </div>
            <div className="admiContainer">
                <div className="navigationBar">
                    <NavigationBar />
                </div>
            </div>
        </div>
    )
}

export default Employees;