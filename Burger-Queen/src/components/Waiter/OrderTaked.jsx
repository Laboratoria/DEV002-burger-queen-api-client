import { useState } from 'react';
import decrease from "../img/decrease.png"
import increase from "../img/increase.png"
import cancel from "../img/cancel.png"

const OrderTaked = ({ selectedProducts, setSelectedProducts }) => {



    const [productQuantity, setProductQuantity] = useState({});


    // const handleClick = (product) => {
    //     // Aquí puedes agregar cualquier otra lógica que necesites al hacer clic en la carta del producto.
    // }

    const handleDecrease = (productId) => {
        setProductQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: (prevQuantity[productId] || 1) - 1,
        }));
    };

    const handleIncrease = (productId) => {
        setProductQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: (prevQuantity[productId] || 1) + 1,
        }));
        console.log('cantidad', productQuantity)
    };

    const handleCancel = (productId) => {
        setProductQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: 0,
        }));
        setSelectedProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    };

    // Tratando que se guarde un array todos los 

    // const [costoTotal, setCostoTotal] = useState(0);

    // const sumaTotal = () => {
    //     let arrSumaTotal = product.id;
    //     products.forEach((product) => {
    //         arrSumaTotal += product.price * (productQuantity[product.id] || 1);
    //     });
    //     setCostoTotal(arrSumaTotal);
    // };

    // llama a SumaTotal en algún momento para actualizar el estado de costoTotal

    return (
        <>
            {/* Estructura de las cartas que se van eligiendo para tomar la orden */}
            {selectedProducts.map((product) => (
                <div className="orderTaked" key={product.id}>
                    <div className="descriptionProduct">
                        <div
                            id="iconOrderTaked"
                            className="CardProductWaiter"
                            onClick={() => handleClick(product)}
                        >
                            <p>{product.name}</p>
                            <img width={'40px'} src={product.image} alt="product" />
                            {/* Este precio no se modifica */}
                            <p>s/ {product.price}</p>
                        </div>
                    </div>
                    <div>
                        <p className="nameProductOrder">{product.name}</p>
                        {/* Aquí tengo que mostrar un numero que será el resultado de product.price multiplicado por el número que representa {productQuantity[product.id] || 1} en la etiqueta <p> */}
                        <p className="price">S/ {product.price * (productQuantity[product.id] || 1)}</p>

                        {/* {costoTotal == product.id ? 
                            <p>{product.id}</p>:
                            <div>Precio total: S/ {costoTotal}</div>
                        } */}

                    </div>
                    <div className="iconosProductSelected">
                        <div>
                            <img
                                className="iconOrderTaked"
                                width={'25px'}
                                src={decrease}
                                onClick={() => handleDecrease(product.id)}
                            />
                            <p style={{ color: "white" }}>{productQuantity[product.id] || 1}</p>
                            <img
                                className="iconOrderTaked"
                                width={'25px'}
                                src={increase}
                                onClick={() => handleIncrease(product.id)}
                            />
                        </div>
                        <div>
                            <img
                                className="iconOrderTaked"
                                width={'25px'}
                                src={cancel}
                                onClick={() => handleCancel(product.id)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default OrderTaked;