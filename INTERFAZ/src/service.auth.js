//service: donde irán mis peticiones


//debo agregar el token de obtenido en auth para  
// const urlAPI='http://localhost:8080/'; 
// const ensayo=fetch(urlAPI+'products');
// //console.log(ensayo);
// const resultado=ensayo.then(data=> {return data.json();})
// //console.log(resultado);
// resultado.then(console.log)

// const urlAPI = 'http://localhost:8080/';
// const ensayo = fetch(urlAPI + 'auth');
// //console.log(ensayo);
// const resultado = ensayo.then(data => { return data.json(); })
// //console.log(resultado);
// resultado.then(console.log)






//para autenticar a los usuarios en LoginPage
export const autenticar = async ({ email, password }) => { //mi componente tiene que esperar a que mi servicio se ejecute por completo para que el token no me lo devuelva en blanco
  let token = null;
  await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => {
      token = {
        ...token,
        ok: false,
        status: res.status
      }
      return res.json()
    })
    .then(res => {

      //console.log('res', res)
      token = {
        ok: (token.status == 200) ? true : false, //respuesta correcta
        message: (token.status == 200) ? "Login ejecutado de forma correcta" : res,
        token: (token.status == 200) ? res : null
      };
    })
    .catch(error => {
      //console.log(error, error.response)
      token = {
        ok: false,
        message: "Error de logueo",
        token: null

      }
    });
  return token;

}








// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2">
//         {category}
//       </th>
//     </tr>
//   );
// }

// function ProductRow({ product }) {
//   const name = product.stocked ? product.name :
//     <span style={{ color: 'red' }}>
//       {product.name}
//     </span>;

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//       <input type="checkbox" />

//     </tr>
//   );
// }

// function ProductTable({ products }) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category} />
//       );
//     }
//     rows.push(
//       <ProductRow
//         product={product}
//         key={product.name} />
//     );
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// function SearchBar() {
//   return (
//     <form>
//       <input type="text" placeholder="Search..." />
//       <label>
//         <input type="checkbox" />
//         {' '}
//         Only show products in stock
//       </label>
//     </form>
//   );
// }

// function FilterableProductTable({ products }) {
//   return (
//     <div>
//       <SearchBar />
//       <ProductTable products={products} />
//     </div>
//   );
// }

// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
// ];


// export default function TakingOrder() {

//   return (
//     <>
//       <h2>toma de orden</h2>

//       <FilterableProductTable products={PRODUCTS} />;
//     </>
//   )
// }