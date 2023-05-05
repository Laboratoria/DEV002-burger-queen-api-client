import { useState, useEffect } from 'react';
import decrease from "../img/decrease.png"
import increase from "../img/increase.png"
import cancel from "../img/cancel.png"

const OrderTaked = ({ selectedProducts, setSelectedProducts }) => {
    
    const [sumaT, setSumaT] = useState();

    const [productQuantity, setProductQuantity] = useState({});

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

    useEffect(() => {
        const prices = selectedProducts.map(product => product.price * (productQuantity[product.id] || 1));
        const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setSumaT(total);
    }, [selectedProducts, productQuantity]);

    return (
        <>
            {selectedProducts.map((product) => (
                <div className="orderTaked" key={product.id}>
                    <div className="descriptionProduct">
                        <div
                            id="iconOrderTaked"
                            className="CardProductWaiter"
                        >
                            <p>{product.name}</p>
                            <img width={'40px'} src={product.image} alt="product" />
                            <p>s/ {product.price}</p>
                        </div>
                    </div>
                    <div>
                        <p className="nameProductOrder">{product.name}</p>
                        <p className="price">S/ {product.price * (productQuantity[product.id] || 1)}</p>
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
            <div onClick={handleSumT}>
               <p>Total: S/ {sumaT}</p> 
            </div>
        </>
    )
};

export default OrderTaked;