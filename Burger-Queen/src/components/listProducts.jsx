import trash from "./img/basura.png";
import edit from "./img/editar.png";

const ProductList = ({ products, onClickDeleteProduct, onClickEditProduct }) => {
  
  const handleDeleteClick = (id) => {
    onClickDeleteProduct(id);
    localStorage.setItem("productId", id);
  }

  const handleEditClick = (id) => {
    onClickEditProduct(id);
    localStorage.setItem("productId", id)
  }

  return (
    <div className="grid-cards">
      {products.map((product) => (
        <div key={product.id}>
          <div className="card">
            <h2 className="card-tittle" style={{ color: product.type === "Desayuno" ? "#EA11FC" : "#44BDCD" }}>
              {product.name}
            </h2>
            <img className="img-card" src={product.image} alt={product.name} />
            <p  id="priceListProduct" className="price">{product.price} soles</p>
            <div className="card-Body">
              <img className="trash" src={trash} alt="Eliminar" onClick={() => handleDeleteClick(product.id)} />
              <img className="edit" src={edit} alt="Editar" onClick={() => handleEditClick(product.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
