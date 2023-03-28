import { GetProducts } from "../request";

import { useState } from "react";

const FilterButtons = ({ onBreakfastClick, onLunchClick }) => {
    return (
      <div>
        <button onClick={onBreakfastClick} className="breakFast">
          Desayuno
        </button>
        <button onClick={onLunchClick} className="lunch">
          Almuerzo
        </button>
      </div>
    );
  };
  

  export default FilterButtons;