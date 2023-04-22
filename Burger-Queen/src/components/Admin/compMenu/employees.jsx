import NavigationBar from "../navigationBar";
import Logotype from "../logotype";
import '../../../estilos/admin/navigationBar.css'
import EmployeeButtons from "../employeeButtons"; 
import ListEmployees from "../ListEmployees";

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
                        <EmployeeButtons />
                    </div>
                    <div>
                    <ListEmployees />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees;