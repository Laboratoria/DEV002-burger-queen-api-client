import decrease from "../img/decrease.png"
import increase from "../img/increase.png"
import cancel from "../img/cancel.png"


const OrderTaked = ({ selectedProducts }) => {
    return (
        <>
            {/* Estructura de las cartas que se van eligiendo para tomar la orden */}
            {selectedProducts.map((product) => (
                <div className="orderTaked">
                    <div className="descriptionProduct">

                        {/* <div className="orderTaked" key={product.id}>
                            <p className="nameProductOrder">{product.name}</p>
                            <p className="price">S/ {product.price}</p>
                        </div> */}

                        <div
                            id="iconOrderTaked"
                            className="CardProductWaiter"
                            key={product.id}
                            onClick={() => handleClick(product)}
                        >
                            <p>{product.name}</p>
                            <img width={'40px'} src={product.image} alt="product" />
                            <p>s/ {product.price}</p>
                        </div>

                    </div>

                    <div>
                        <p className="nameProductOrder">{product.name}</p>
                        <p className="price">S/ {product.price}</p>
                    </div>
                    <div className="iconosProductSelected">
                      <div>
                        <img className="iconOrderTaked" width={'25px'} src={decrease}></img>
                        <p style={{color: "white"}}>2</p>
                        <img className="iconOrderTaked" width={'25px'} src={increase}></img>
                    </div>
                    <div>
                        <img className="iconOrderTaked" width={'25px'} src={cancel}></img>
                    </div>  
                    </div>
                    
                </div>
            ))}

        </>
    )
};

export default OrderTaked;