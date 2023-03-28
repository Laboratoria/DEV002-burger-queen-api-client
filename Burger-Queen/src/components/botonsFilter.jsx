import React from "react";
import { GetProducts } from "../request";
import { useState } from "react";
// import trash from "./img/basura.png";
// import edit from "./img/editar.png";

import ProductList from "./listProducts";
import FilterButtons from "./onlyBotton";

const BotonsFilter = () => {
    const [products, setProducts] = useState([]);

    const handleBreakfastClick = async () => {
        const data = await GetProducts();
        const filteredProducts = data.filter(
            (product) => product.type === "Desayuno"
        );
        setProducts(filteredProducts);
    };

    const handleLunchClick = async () => {
        const data = await GetProducts();
        const filteredProducts = data.filter(
            (product) => product.type === "Almuerzo"
        );
        setProducts(filteredProducts);
    };

    return (
        <div>
            <FilterButtons
                onBreakfastClick={handleBreakfastClick}
                onLunchClick={handleLunchClick}
            />
            <ProductList products={products} />
        </div>
    );
};

export default BotonsFilter;