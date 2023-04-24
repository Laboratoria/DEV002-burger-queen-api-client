import EmployeeButtons from "./Admin/employeeButtons"
import ListEmployees from "./Admin/ListEmployees";
import { useState } from "react";
import { addEmployee, getUsers } from "../request";

const ContainerBottonsAndList = ({handleAddClick, onClickEditUser}) => {
    const [users, setUsers] = useState([]);

    const handleWaiterClick = async () => {
        const data = await getUsers();
        console.log('data', data)
        const filteredWaiters = data.filter(
            (user) => user.role === "waiter"
        );
        console.log(data)
        console.log('onhandleWaiterClick')
        setUsers(filteredWaiters)
    };

    const handleCooksClicks = async() => {
        const data = await getUsers();
        const filteredCooks = data.filter(
            (user) => user.role === "cooks"
        );
        setUsers(filteredCooks)
    }

    return (
        <div className="containerBottonsList">
            <div className="botonsFilter">
                <EmployeeButtons
                    onhandleWaiterClick={handleWaiterClick}
                    onhandleCooksClick={handleCooksClicks}
                    onhandleAddClick={handleAddClick}
                />
            </div>
            <div>
                <ListEmployees
                    users={users}
                    onClickEditUser={onClickEditUser}
                />
            </div>
        </div>
    )
}

export default ContainerBottonsAndList;