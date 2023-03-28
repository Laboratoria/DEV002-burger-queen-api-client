import React from "react";
import { GetProducts } from "../request";
const BotonsFilter = () => {
    const handleClickBreakfast = () => {
        console.log('Desayuno');
        GetProducts('Desayuno');
    };

    const handleClickLunch = () => {
        console.log('Almuerzo');
        GetProducts('Almuerzo');
    };

    return (
        <div>
            <button onClick={handleClickBreakfast} className="breakFast">Desayuno</button>
            <button onClick={handleClickLunch} className="lunch">Almuerzo</button>
        </div>
    );
};





// // import { useState } from "react";

// const BotonsFilter = () => {
//     const token = localStorage.getItem("token");

//     const handleGetProducts = async () => {
//         console.log('token', token)
//         await GetProducts();
//     };

//     handleGetProducts()

//     const handleClickBreakfast = () => {

//         console.log('Desayuno');
//     };
    



//     const handleClickLunch = () => {
//         console.log('Almuerzo');
//     };
//     return (
//         <div>
//             <button onClick={handleClickBreakfast} className="breakFast">Desayuno</button>
//             <button onClick={handleClickLunch} className="lunch">Almuerzo</button>
//         </div>
//     );
// };

export default BotonsFilter;