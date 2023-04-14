import { useState, useEffect } from "react";
import { getProductos, postOrden } from "../service.auth.js";
import { FaSignOutAlt, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
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
        <td><img className="product-image" src={product.image} alt="" /></td>

      </tr>
    </>
  );
}

function ProductRowOrder({ product, cantidad, onIncrease, onDecrease, onRemove }) {//crearé un useState para guardar los productos de mi orden(click, almaceno)
  const name = product.name;


  return (
    <>
      <tr>
        <td><FaPlus className="flow-icon" color="#318aac" size={"1rem"} onClick={onIncrease} /></td>

        <td>{cantidad}</td>
        <td><FaMinus className="flow-icon" color="#318aac" size={"1rem"} onClick={onDecrease} /></td>

        <td>{name}</td>
        <td>${product.price}</td>
        <td>${product.price * cantidad}</td>

        <td><FaTrash className="flow-icon" color="#318aac" size={"1rem"} onClick={onRemove} /></td>


      </tr>

    </>
  );
}


function ProductTable({ products }) {
  const rows = [];
  let lastType = null; //para que se muestre solo 1 vez  al inicio de la tabla el type de los productos

  const [PRODUCTOSORDEN, setPRODUCTOSORDEN] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  const [userName, setUserName] = useState("");
  const onChangeUserName=({ target })=>{
    setUserName(target.value)
  }
  const clickChild = (product) => {
    // console.log(product);
    //1ºpaso: validar si el producto existe en el array de PRODUCTOSORDEN
    //2ªpaso: si no está creo un nuevo objeto con el campo cantidad inicializado con 1 y el product
    //3ºpaso: si ya está, que encuentre el objeto y modifique su cantidad

    if (PRODUCTOSORDEN.find(elemento => elemento.product.id == product.id) === undefined) { //si no existe agrégale
      const newProduct = { qty: 1, product }
      const productosElegidos = [...PRODUCTOSORDEN];
      productosElegidos.push(newProduct);
      setPRODUCTOSORDEN(productosElegidos);
    }
    else {
      const nuevoArray = PRODUCTOSORDEN.map((element) => { //si el producto no existe que lo coloque como está
        if (element.product.id !== product.id) {
          return element;
        }
        element.qty += 1; //si existe en el arreglo que aumente su cantidad
        return element;
      })
      setPRODUCTOSORDEN(nuevoArray);
    }
  }
  const clickChildMinus = (product) => {
    //si la cantidad es mayor a 1 que disminuya la cantidad en 1
    // console.log(product);

    const nuevoArray = PRODUCTOSORDEN.map(element => {
      if (element.product.id !== product.id) {
        return element;
      }
      else
        if ((element.product.id == product.id) && (element.qty > 1)) {
          element.qty -= 1;
          return element;
        }
    })
    const resultado = nuevoArray.filter(producto => producto != undefined);

    console.log(resultado)
    setPRODUCTOSORDEN(resultado)
  }

  const clickChildRemove = (product) => {
    console.log("quitar producto")
    const nuevoArray = PRODUCTOSORDEN.map(element => {
      if (element.product.id == product.id) {
        return 0;
      }
      else { return element };
    })
    console.log(nuevoArray);
    const arrayResultado = nuevoArray.filter(producto => producto !== 0);
    console.log(arrayResultado)
    setPRODUCTOSORDEN(arrayResultado);

  }

  const calcularPrecioTotal = () => {
    let suma = 0;

    PRODUCTOSORDEN.forEach(producto => {
      suma += producto.qty * producto.product.price;
      console.log(suma)
    });
    console.log(suma);
    setPrecioTotal(suma)
  }

  useEffect(() => {
    calcularPrecioTotal()

  }, [PRODUCTOSORDEN]); //después del primer render y solo 1 vez ejecutará mi función traerProductos


  

  //función para enviar una orden a cocina
  const enviarOrden = async() => {
    console.log('Enviar orden a cocina')
    console.log(userName)
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    const token = user.accessToken;
    const idWaiter = user.user.id;
    await postOrden(token, idWaiter, userName, PRODUCTOSORDEN)
    console.log("orden creada")
    setPRODUCTOSORDEN([]);
    setUserName("");

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
        clickChild={clickChild}
      />
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
      <input type="text" className="nombre-cliente" placeholder="   clientx..." name="userName" value={userName} onChange={onChangeUserName}></input>

      <table id='table-order' className="tabla-pedido">
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
          PRODUCTOSORDEN.map(producto => <ProductRowOrder
            key={producto.product.id}
            product={producto.product}
            cantidad={producto.qty}
            onIncrease={() => clickChild(producto.product)}
            onDecrease={() => clickChildMinus(producto.product)}
            onRemove={() => clickChildRemove(producto.product)}


          />
          )
        }
        </tbody>
      </table>
      <div id="precio-total">Precio total: $... <h5 className="precio">{precioTotal}</h5></div>
      <div className="botones-inferiores">
        <button className="btn-enviar-orden" onClick={() => console.log("Ver pedidos")}>
          <GiCampCookingPot className="icon-enviar-orden" size={"2rem"} />Ver Pedidos
        </button>
        <button className="btn-enviar-orden" onClick={() => enviarOrden()}>
          <BiDish className="icon-enviar-orden" size={"2rem"} />Enviar Orden
        </button>
      </div>
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






















