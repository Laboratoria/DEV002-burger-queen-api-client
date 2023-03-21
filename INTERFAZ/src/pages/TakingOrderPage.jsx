import { useState, useEffect } from "react";
import { getProductos } from "../service.auth.js";

import "./css-pages/taking-order.css"

function ProductTypeRow({ type }) {
  return (
    <tr>
      <th colSpan="2">
        {type}
      </th>
    </tr>
  );
}

function ProductRow({ product, clickChild }) {//crearé un useState para guardar los productos de mi orden(click, almaceno)
  const name = product.name;

  return (
    <>
      <tr onClick={()=>clickChild(product)}>  
        <td>{name}</td>
        <td>${product.price}</td>

      </tr>

    </>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastType = null; //para que se muestre solo 1 vez  al inicio de la tabla el type de los productos

const clickChild =(product)=>{
  console.log('click', product)
}


  products.forEach((product) => {
    if (product.type !== lastType) {
      rows.push(
        <ProductTypeRow
          type={product.type}
          key={product.type} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
        clickChild={clickChild} />
    );
    lastType = product.type;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}


export default function TakingOrder() {


  const [PRODUCTOS, setPRODUCTOS] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    // setPRODUCTOS(PRODUCTOSTODOS);
    if (isChecked) { getProductsByTypes('Desayuno') }
    else {
      getProductsByTypes(null); //para que no filtre
    }

  }


  const getProductsByTypes = async (tipo) => {
    const user = JSON.parse(localStorage.getItem('user'))
    //console.log(user);
    const token = user.accessToken;
    // console.log(token);

    const productos = await getProductos(token);
    if (tipo) {
      setPRODUCTOS(productos.filter(producto => producto.type == tipo))

    }
    else {
      setPRODUCTOS(productos)

    }
  }

  const filterBtn = async (tipo) => {
    await getProductsByTypes(tipo);
    setIsChecked(false)
  }


  useEffect(() => {
    getProductsByTypes('Desayuno')

  }, []); //después del primer render y solo 1 vez ejecutará mi función traerProductos

  return (
    <div>
      <h2>Toma de orden</h2>
      <div className="botones-menu">
        <button onClick={() => filterBtn('Desayuno')}>Desayunos</button>
        <button onClick={() => filterBtn('Almuerzo')}>Almuerzos</button>
        <div className="checkbox-container">
          <input type="checkbox"
            className="checkbox"
            checked={isChecked}
            onChange={handleOnChange} />
          <h4>Todos</h4>
        </div>
      </div>
      
      <ProductTable products={PRODUCTOS} />
      
      {/* TOMA DE ORDEN */}
      <input type="text" className="nombre-cliente" placeholder="   clientx..."></input>

    </div>
  );
}






















