import { getProductos } from "../service.auth.js";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
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
      <td>{product.price}</td>

    </tr>

    </>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
   
    
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
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



const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const traerProductos =async()=>{
  const user = JSON.parse(localStorage.getItem('user'))
  //console.log(user);
   const token=user.accessToken;
 //console.log(token);
 
 
 let productos=await getProductos(token);
 console.log(productos);
}





export default function TakingOrder() {
  traerProductos();

  
  return (
    <div>
    <h2>toma de orden</h2>
  <ProductTable products={PRODUCTS} />
  </div>
  );
}






















