import NavigationBar from "../navigationBar";
import Logotype from "../logotype";
import '../../../estilos/admin/navigationBar.css'
import ContainerBottonsAndList from "../../containerBottonsLAndist";

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

                <div className="cards">
                    <div className="buttonsProducts">
                        <ContainerBottonsAndList />
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Employees;