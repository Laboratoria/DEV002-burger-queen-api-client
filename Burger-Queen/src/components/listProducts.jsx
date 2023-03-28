import trash from "./img/basura.png";
import edit from "./img/editar.png";

const ProductList = ({ products }) => {
    return (
      <div className="grid-cards">
        {products.map((product) => (
          <div key={product.id}>
            <div className="card">
              <h2 className="card-tittle">{product.name}</h2>
              <img className="img-card" src={product.image} alt={product.name} />
              <p className="price">{product.price}</p>
              <div className="card-Body">
                <img className="trash" src={trash} alt="Eliminar" />
                <img className="edit" src={edit} alt="Editar" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

  export default ProductList;