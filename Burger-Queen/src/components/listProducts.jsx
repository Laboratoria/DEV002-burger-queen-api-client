import trash from "./img/basura.png";
import edit from "./img/editar.png";

const ProductList = ({ products, onClickDeleteProduct }) => {
  return (
    <div className="grid-cards">
      {products.map((product) => (
        <div key={product.id}>
          <div className="card">
            <h2 className="card-tittle" style={{ color: product.type === "Desayuno" ? "#EA11FC" : "#44BDCD" }}>
              {product.name}
            </h2>
            <img className="img-card" src={product.image} alt={product.name} />
            <p className="price">{product.price}</p>
            <div className="card-Body">
              <img className="trash" 
              src={trash} alt="Eliminar" 
              onClick={() => onClickDeleteProduct }
              />
              <img className="edit" src={edit} alt="Editar"   onClick={() => onClickDeleteProduct(product.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProductList;