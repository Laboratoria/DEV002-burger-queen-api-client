import React from "react";
import { GetProducts } from "../request";
import { useState } from "react";
import ProductList from "./listProducts";
import FilterButtons from "./onlyBotton";

const BotonsFilter = ({ onAddProductClick, onClickDeleteProduct, onClickEditProduct }) => {
    const [products, setProducts] = useState([]);

    // Estado para guardar el id del producto a eliminar
    const [idDelProducto, setIdDelProducto] = useState(null);
    const handleDeleteProduct = (id) => {
        setIdDelProducto(id);
        cambiarEstadoModalDelete(true);
    };

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
                onAddProductClick={onAddProductClick}
            />
            <ProductList
                products={products}
                onClickDeleteProduct={onClickDeleteProduct}
                onClickEditProduct={onClickEditProduct}
                id={idDelProducto}
            />
        </div>
    );
};  

export default BotonsFilter;