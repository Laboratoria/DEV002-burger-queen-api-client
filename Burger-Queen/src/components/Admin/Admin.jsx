import Logotype from "./logotype.jsx";
import NavigationBar from "./navigationBar.jsx";
import BotonsFilter from "../botonsFilter.jsx";
import { GetProducts } from "../../request.js";
import { useState, useEffect } from "react";
// import ProductList from "../listProducts.jsx";
import AddModal from "./addModal.jsx";
import ModalDelete from "./modalDelete.jsx";

const Admin = () => {
  // Lógica para abrir y cerrar el modal para agregar un nuevo producto------------------------------------------------------------------
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  // Lógica para abrir y cerrar el modal de eliminar producto----------------------------------------
  const [estadoModalDelete, cambiarEstadoModalDelete] = useState(false);

  // Lógica para agregar nuevos productos con los inputs de precio y tipo en este componente ----------------------------------------------------------------------------
  const [price, setPrice] = useState("");
  const [type, setType] = useState(null);


  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTypeChange = (event) => {
    event.preventDefault();
    const value = event.target.id;
    setType(value);
  };

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
                  onClickDeleteProduct={() => cambiarEstadoModalDelete(!estadoModalDelete)}
                />
              </div>
            </div>
            <div>
                  <ModalDelete 
                  estado={estadoModalDelete} 
                  cambiarEstado={cambiarEstadoModalDelete}
                  />
            </div>
            <div className="bar">
              {/* <ProductList products={products} /> */}
            </div>
            <div>
              <AddModal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                props={{ price, type }}
              >
                <div className="formAddProduct">
                  <label className='label-form'>
                    Precio
                    <input type="text" value={price} onChange={handlePriceChange} placeholder="Precio" className="inputModalProduct" name=""></input>
                  </label>
                </div>
                <div className="formAddProduct">
                  <label className='label-form'>
                    Tipo
                    <button id="Desayuno" value={type} onClick={handleTypeChange} className="buttonsOfCategory">Desayuno</button>
                    <button id="Almuerzo" value={type} onClick={handleTypeChange} className="buttonsOfCategory">Almuerzo</button>
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

export default Admin;
