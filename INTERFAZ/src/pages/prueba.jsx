import { useState } from 'react';

function FilterableProductTable({ products }) {
 // const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        //filterText={filterText} 
        inStockOnly={inStockOnly} 
        //onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        //filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

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
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // if (
    //   product.name.toLowerCase()
    //   .indexOf(filterText.toLowerCase()) === -1
    // ) {
    //   return;
    // }
    if (inStockOnly && !product.stocked) {
      return;
    }
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

function SearchBar({
  //filterText,
  inStockOnly,
  //onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      {/* <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} /> */}
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
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

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}




// estilos:
// .checkbox {
//   height: 25px;
//   width: 20px;
//   background-color: aqua;
//   margin-bottom: 30px;
//   appearance: none; 


//   cursor: pointer;
//   background-color: #fff;
//   background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
//   width: 48px;
//   height: 48px;
//   appearance: none;
//   border: 2px solid #888;

// }


/* <div className="checkbox">
          <input type="checkbox"
            className="checkbox-todos-los-productos"
            id="checkbox">

          </input>
        </div> */




        // console.log('click', product);
    // product = {
    //   qty: 0,
    //   ...product  
    // }




    //PRUEBA DE TAKE ORDER

    // }
  //  {productosElegidos.map((prod)=>{prod})}
  // let productoInicial= productosElegidos.product.id.includes(product.id)

  // const cars = [ 
  //   { id: 'PSS-123', model: 'Mustang', price: 30000},
  //   { id: 'CHS-345', model: 'Camaro', price: 14500},
  //   { id: 'ABS-567', model: 'Aveo', price: 9000},
  //   ];
    
    
  //   const carsDiscount = cars.map( function(car) { 
    
  //    if( car.price < 15000 ) 
  //   return { 
  //   ...car,
  //   price: car.price *0.9 
  //   }
    
  //   })








  // for (let i = 0; i < productosElegidos.length; i++) {
  //     productosElegidos[i].id.reduce((a, e) => {
  //         if (!a.find(d => d == e)) {
  //             a.push(e)
  //         }
  //         return a;
  //     }, idsProdElegidos);
  // }
 //console.log(productosElegidos);











 // productosElegidos.map((prod)=>{
    //   // if(productoInicial)
    //   let productoInicial= prod.includes(product.id);
    //   console.log(productoInicial);
    //   console.log(prod.id)}
    //   );
    // console.log(productosElegidos);
  
    // console.log(producto.product.id)
    // console.log(productosElegidos[0].id)
    //   console.log(productoInicial);
    // console.log(productosElegidos);

    // setPRODUCTOSORDEN(product);
    // console.log(PRODUCTOSORDEN)
    // let productos=addProducts(producto);
    // console.log(productos);

    // return productosElegidos;



















    // const addProducts = () => {
//   let product=clickChild(product)

//   let arrayProductos = [];
//   if (product.qty >= 1) {
//     arrayProductos.push(product)
//   }
//   return arrayProductos;
// }

// let arrayProductosElegidos =addProducts();
// console.log(arrayProductosElegidos);