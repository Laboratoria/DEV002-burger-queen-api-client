import React from "react";
import { GetProducts } from "../request";
import { useState } from "react";
import trash from "./img/basura.png";
import edit from "./img/editar.png";

const BotonsFilter = () => {

    const [products, setProducts] = useState([]);


    const handleClickBreakfast = async () => {
        const data = await GetProducts();
        const filteredProducts = data.filter(
            (product) => product.type === "Desayuno"
        );
        setProducts(filteredProducts);
    };

    const handleClickLunch = async () => {
        const data = await GetProducts();
        console.log('almuerzo')
        const filteredProducts = data.filter(
            (product) => product.type === "Almuerzo"
        );
        console.log(filteredProducts)
        setProducts(filteredProducts);
    };


    return (
        <div>
            <button onClick={handleClickBreakfast} className="breakFast">
                Desayuno
            </button>
            <button onClick={handleClickLunch} className="lunch">
                Almuerzo
            </button>
            <div className="grid-cards">
                {products.map((product) => (
                    <div key={product.id} >
                        <div className="card">
                            <h2 className="card-tittle">{product.name}</h2>
                            <img className="img-card" src={product.image}></img>
                            <p className="price">{product.price}</p>
                            <div className="card-Body">
                                <img className="trash" src={trash}></img>
                                <img className="edit" src={edit}></img>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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