import React from "react";
import { GetProducts } from "../request";
import { deleteProduct } from "../request";
import { useState } from "react";
import ProductList from "./listProducts";
import FilterButtons from "./onlyBotton";

const BotonsFilter = ({onAddProductClick, handleDeleteProduct}) => {
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

    // const handleDeleteProduct = async (id) => {
    //     await deleteProduct(id);
    //     setProducts(products.filter((product) => product.id !== id));
    //   };

    return (
        <div>
            <FilterButtons
                onBreakfastClick={handleBreakfastClick}
                onLunchClick={handleLunchClick}
                onAddProductClick={onAddProductClick}
            />
            <ProductList products={products} 
            onClickDeleteProduct={handleDeleteProduct} />
        </div>
    );
};

export default BotonsFilter;