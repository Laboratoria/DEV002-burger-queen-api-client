import Logotype from "./logotype.jsx";
import NavigationBar from "./navigationBar.jsx";
// import BotonsFilter from "../botonsFilter.jsx";
// import Cards from "../cards.jsx"
import add from "../img/add.png"
// import Products from "../pueba.jsx";
// import FilterButtons from "../onlyBotton.jsx";
import { GetProducts } from "../../request.js";
import { useState, useEffect } from "react";
import FilterButtons from "../onlyBotton.jsx";
import ProductList from "../listProducts.jsx";

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleProducts();
  }, []);

  const handleProducts = async () => {
    const data = await GetProducts();
    setProducts(data);
  };

  return (
    <>
      <div className="container">
        <div className="logotype">
          <Logotype />
        </div>
        <div className="admiContainer">
          <div className="navigationBar">
            <NavigationBar />
          </div>
          <div className="cards">
            <div className="buttonsProducts">
              <div className="botonsFilter">
                <FilterButtons
                  onBreakfastClick={() =>
                    setProducts(products.filter((p) => p.type === "Desayuno"))
                  }
                  onLunchClick={() =>
                    setProducts(products.filter((p) => p.type === "Almuerzo"))
                  }
                />
              </div>
              <div className="addProduct">
                <img className="add" src={add} alt="Agregar" />
                <p className="textButtonAdd">Agregar producto</p>
              </div>
            </div>
            <div className="bar">
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
