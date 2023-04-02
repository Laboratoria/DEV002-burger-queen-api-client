import add from "./img/add.png"

const FilterButtons = ({ onBreakfastClick, onLunchClick }) => {
  return (
    <div className="row">
      <div className="onlyButtons">
       <button onClick={onBreakfastClick} className="breakFast">
        Desayuno
      </button>
      <button onClick={onLunchClick} className="lunch">
        Almuerzo
      </button> 
      </div>
      
      <div className="addProduct">
        <img className="add" src={add} alt="Agregar" />
        <p className="textButtonAdd">Agregar producto</p>
      </div>
    </div>
  );
};

export default FilterButtons;