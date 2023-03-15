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
    

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <input type="checkbox" />

      </tr>
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

    return (
        <>
                <h2>toma de orden</h2>

        </>
    )
}