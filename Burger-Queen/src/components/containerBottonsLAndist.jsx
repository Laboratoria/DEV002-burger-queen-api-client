import EmployeeButtons from "./Admin/employeeButtons"
import ListEmployees from "./Admin/ListEmployees";
import { useState } from "react";
import { addEmployee, getUsers } from "../request";

const ContainerBottonsAndList = ({handleAddClick, onClickEditUser, onClickDeleteUser}) => {
    const [users, setUsers] = useState([]);

    const handleWaiterClick = async () => {
        const data = await getUsers();
        const filteredWaiters = data.filter(
            (user) => user.role === "waiters"
        );
        setUsers(filteredWaiters)
    };

    const handleCooksClicks = async() => {
        const data = await getUsers();
        const filteredCooks = data.filter(
            (user) => user.role === "cooks"
        );
        setUsers(filteredCooks)
    };

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
                    onClickDeleteUser={onClickDeleteUser}
                />
            </div>
        </div>
    )
};

export default ContainerBottonsAndList;