import add from "./img/add.png"

const FilterButtons = ({ onBreakfastClick, onLunchClick, modal1}) => {
  return (
    <div className="rowFilter">
      <div className="onlyButtons">
       <button onClick={onBreakfastClick} className="breakFast">
        Desayuno
      </button>
      <button onClick={onLunchClick} className="lunch">
        Almuerzo
      </button> 
      </div>
      
      <div className="addProduct" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
        <img className="add" onClick={modal1} src={add} alt="Agregar" />
        <p className="textButtonAdd">Agregar producto</p>
      </div>
    </div>
  );
};


export default FilterButtons;

