import add from "../img/add.png"

const EmployeeButtons = ({ onhandleWaiterClick, onhandleCooksClick }) => {
  return (
    <div className="rowFilter">
      <div className="onlyButtons">
        <button onClick={onhandleCooksClick} className="cooks">
          Cocineros
        </button>
        <button onClick={onhandleWaiterClick} className="waiters">
          Meseros
        </button>
      </div>

      <div className="addProduct">
        <img className="add" src={add} alt="Agregar" />
        <p className="textButtonAdd">Añadir personal</p>
      </div>
    </div>
  )
}

export default EmployeeButtons;