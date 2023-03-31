import { useState, useEffect } from "react";
import { getProductos } from "../service.auth.js";
import { FaSignOutAlt, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { logOut } from "../service.auth.js";
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
        <td><img className="product-imagen" src={product.image} alt=""/></td>

      </tr>
    </>
  );
}

function ProductRowOrder({ product, cantidad }) {//crearé un useState para guardar los productos de mi orden(click, almaceno)
  const name = product.name;
  

  return (
    <>
      <tr>
        <td><FaPlus className="flow-icon" color="#318aac" size={"1rem"} /></td>

        <td>{cantidad}</td>
        <td><FaMinus className="flow-icon" color="#318aac" size={"1rem"} /></td>

        <td>{name}</td>
        <td>${product.price}</td>
        <td>${product.price * cantidad}</td>

        <td><FaTrash className="flow-icon" color="#318aac" size={"1rem"} /></td>


      </tr>

    </>
  );
}


function ProductTable({ products }) {
  const rows = [];
  let lastType = null; //para que se muestre solo 1 vez  al inicio de la tabla el type de los productos

  const [PRODUCTOSORDEN, setPRODUCTOSORDEN] = useState([]);
  console.log(PRODUCTOSORDEN);

  const clickChild = (product) => {
    //1ºpaso: validar si el producto existe en el array de PRODUCTOSORDEN
    //2ªpaso: si no está creo un nuevo objeto con el campo cantidad inicializado con 1 y el product
    //3ºpaso: si ya está que encuentre el objeto y modifique su cantidad

    if (PRODUCTOSORDEN.find(elemento => elemento.product.id == product.id) === undefined) {
      const newProduct = { qty: 1, product }
      const productosElegidos = [...PRODUCTOSORDEN];
      productosElegidos.push(newProduct);
      setPRODUCTOSORDEN(productosElegidos);
    }
    else {
      const nuevoArray = PRODUCTOSORDEN.map((element) => {
        if (element.product.id !== product.id) {
          return element;
        }
        element.qty += 1;
        return element;
      })
      setPRODUCTOSORDEN(nuevoArray);
    }

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
    <>
      <h3 className="productos">PRODUCTOS</h3>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th className="titulo-imagen">Imagen</th>

          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

      <br></br>

      <h3 className="pedido">PEDIDO</h3>
      <input type="text" className="nombre-cliente" placeholder="   clientx..."></input>

      <table id='table-workers' className="tabla-pedido">
        {PRODUCTOSORDEN.length == 0 ? <thead></thead> : <thead>

          <tr>
            <th><FaPlus className="flow-icon" color="black" size={"1rem"} /></th>
            <th>Cantidad</th>
            <th><FaMinus className="flow-icon" color="black" size={"1rem"} /></th>
            <th>Producto</th>
            <th>Precio/u</th>
            <th>Precio</th>
            <th><FaTrash className="flow-icon" color="black" size={"1rem"} /></th>

          </tr>

        </thead>}

        <tbody>{
          PRODUCTOSORDEN.map(product => <ProductRowOrder
            key={product.product.id}
            product={product.product}
            cantidad={product.qty}
          />
          )
        }
       
        </tbody>

      </table>
{/* <h5>{precioTotal}</h5> */}

    </>
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
    </div>
  );
}






















