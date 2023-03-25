import { useState, useEffect } from "react";
import { getProductos } from "../service.auth.js";

import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logOut } from "../service.auth.js";
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
      <tr onClick={() => clickChild(product)}>
        <td>{name}</td>
        <td>${product.price}</td>
      </tr>
    </>
  );
}

var productosElegidos = [];
var productosElegidosQty = [];
var PRODUCTOSELEGIDOS;

var idsArray = [];

function ProductTable({ products }) {
  const rows = [];
  let lastType = null; //para que se muestre solo 1 vez  al inicio de la tabla el type de los productos

  // const [PRODUCTOSORDEN, setPRODUCTOSORDEN] = useState([]);
  const [countClick, setCountClick] = useState(1);
  // let productosElegidos = [];

  const clickChild = (product) => {
    let idProduct = product.id;
    idsArray.push(idProduct);
    console.log(idsArray);
    // setCountClick(countClick+ 1);
    // setCountClick(product.id== ? countClick:(countClick+ 1));

    let producto = { qty: countClick, product }
    // console.log('click', producto);
    // const mapProdElegidos = () => {
    productosElegidos.push(product)
    productosElegidosQty.push(producto)
    console.log(productosElegidos);
    // console.log(productosElegidosQty);

    function unique(arr) {
      let result = [];

      for (let str of arr) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }

      return result;
    }

    // console.log(unique(productosElegidos));
    PRODUCTOSELEGIDOS = unique(productosElegidos);
    console.log(PRODUCTOSELEGIDOS);
    // return PRODUCTOSELEGIDOS;
    localStorage.setItem('productosElegidos', JSON.stringify(PRODUCTOSELEGIDOS)) //para guardar como texto mi objeto para poder guardarlo en el local storage(no se puede guardar como objeto)


    //  let result = productosElegidos.filter(prod => {
    //   idsArray.includes(prod.id)? setCountClick(countClick+ 1):setCountClick(countClick);
    // console.log(countClick);

    // });

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

  const [PRODUCTOSORDEN, setPRODUCTOSORDEN] = useState([]);
  let arrayProductos = [];
  // let productoElegido=arrayProductos.push(clickChild);
  // console.log(productoElegido);
  // setPRODUCTOSORDEN(JSON.parse(localStorage.getItem('productosElegidos')))
  // console.log(PRODUCTOSORDEN);

  useEffect(() => {
    getProductsByTypes('Desayuno')

  }, []); //después del primer render y solo 1 vez ejecutará mi función traerProductos




  return (
    <div className="take-order-page">
      <div className="tomar-orden-h2">
        <h2>Toma de orden</h2>
        <div className="log-out">
        <Link to="/" >
        <FaSignOutAlt className="flow-icon" size={"2rem"} />
      </Link>
      </div>
      </div>
      
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
      {/* <ProductTable products={JSON.parse(localStorage.getItem('productosElegidos'))} /> */}

    </div>
  );
}






















