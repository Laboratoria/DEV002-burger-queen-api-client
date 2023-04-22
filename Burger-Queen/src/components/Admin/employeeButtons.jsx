import add from "../img/add.png"

const EmployeeButtons = () => {
    return (
        <div className="rowFilter">
      <div className="onlyButtons">
       <button  className="breakFast">
        Cocineros
      </button>
      <button  className="lunch">
        Meseros
      </button> 
      </div>
      
      <div className="addProduct">
        <img className="add"  src={add} alt="Agregar" />
        <p className="textButtonAdd">Añadir personal</p>
      </div>
    </div>
    )
}

export default EmployeeButtons;