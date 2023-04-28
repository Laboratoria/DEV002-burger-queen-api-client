const CardProductWaiter = ({ products, onProductClick}) => {

  const handleClick = (product) => {
    onProductClick(product);

  };
    return (
      <div className="gridCardsProductsWaiter">
        {Array.isArray(products) &&
          products.map((product) => (
            <div 
            id="iconOrderTaked" 
            className="CardProductWaiter" 
            key={product.id}
            onClick={() => handleClick(product)}
            >
              <p>{product.name}</p>
              <img width={'40px'} src={product.image} alt="product"/>
              <p>s/ {product.price}</p>
            </div>
          ))}
      </div>
    );
  };

export default CardProductWaiter;