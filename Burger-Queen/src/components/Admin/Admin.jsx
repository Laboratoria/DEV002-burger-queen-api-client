import Logotype from "./logotype.jsx";
import NavigationBar from "./navigationBar.jsx";
import BotonsFilter from "../botonsFilter.jsx";
import { GetProducts } from "../../request.js";
import { useState, useEffect } from "react";
// import ProductList from "../listProducts.jsx";
import AddModal from "./addModal.jsx";

const Admin = () => {
  // Lógica para abrir y cerrar el modal------------------------------------------------------------------
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  // Lógica para  traer los productos-------------------------------------------
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
                <BotonsFilter
                  onBreakfastClick={() =>
                    setProducts(products.filter((p) => p.type === "Desayuno"))
                  }
                  onLunchClick={() =>
                    setProducts(products.filter((p) => p.type === "Almuerzo"))
                  }
                  onAddProductClick={() => cambiarEstadoModal1(!estadoModal1)}
                />
              </div>
            </div>
            <div className="bar">
              {/* <ProductList products={products} /> */}
            </div>
            <div>
              <AddModal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
              >
                <div className="formAddProduct">
                  <label className='label-form'>
                    Precio
                    <input type="" placeholder="Precio" className="inputModalProduct" name=""></input>
                  </label>
                </div>
                <div className="formAddProduct">
                  <label className='label-form'>
                    Categoría
                    <button id="breakfast" className="buttonsOfCategory">Desayuno</button>
                    <button id="lunch" className="buttonsOfCategory">Almuerzo</button>
                  </label>
                </div>
              </AddModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

texto d eprueba

export default Admin;
