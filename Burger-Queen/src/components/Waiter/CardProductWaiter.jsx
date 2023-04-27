const CardProductWaiter = ({ products }) => {
    return (
      <div className="gridCardsProductsWaiter">
        {Array.isArray(products) &&
          products.map((product) => (
            <div id="iconOrderTaked" className="CardProductWaiter" key={product.id}>
              <p>{product.name}</p>
              <img width={'40px'} src={product.image} alt="product"/>
              <p>s/ {product.price}</p>
            </div>
          ))}
      </div>
    );
  };

  export default CardProductWaiter