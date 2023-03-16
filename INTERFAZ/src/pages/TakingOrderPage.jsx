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

function ProductRow({ product }) {
  const name = product.name;
  
  return (
    <>
    <tr>
      <td>{name}</td>
      <td>${product.price}</td>

    </tr>

    </>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastType = null;

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
        key={product.name} />
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
  const [PRODUCTOS, setPRODUCTOS]=useState([]);

  const traerProductos =async()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    //console.log(user);
     const token=user.accessToken;
   //console.log(token);
   
   let productos=await getProductos(token);
   console.log(productos);
   setPRODUCTOS(productos);
  }


  useEffect(() => {
    traerProductos();
  
  }, []); //después del primer render y solo 1 vez ejecutará mi función traerProductos

  return (
    <div>
    <h2>Toma de orden</h2>
    <div className="botones-menu">
    <button>Desayunos</button>
    <button>Almuerzos</button>
    </div>
    <ProductTable products={PRODUCTOS} />
  </div>
  );
}






















