import { useState } from 'react';
import decrease from "../img/decrease.png"
import increase from "../img/increase.png"
import cancel from "../img/cancel.png"

const OrderTaked = ({ selectedProducts }) => {
    const [productQuantity, setProductQuantity] = useState({});

    const handleClick = (product) => {
        // Aquí puedes agregar cualquier otra lógica que necesites al hacer clic en la carta del producto.
    }

    const handleDecrease = (productId) => {
        setProductQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: (prevQuantity[productId] || 0) - 1,
        }));
    };

    const handleIncrease = (productId) => {
        setProductQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: (prevQuantity[productId] || 0) + 1,
        }));
    };

    const handleCancel = (productId) => {
        setProductQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: 0,
        }));
    };

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
                        <p className="price">S/ {product.price}</p>
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



// const OrderTaked = ({ selectedProducts }) => {
//     const [quantity, setQuantity] = useState(1);

//     const handleQuantity = (type) => {
//         if (type === "increment") {
//             setQuantity(quantity + 1);
//         } else if (type === "decrement" && quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     return (
//         <>
//             {/* Estructura de las cartas que se van eligiendo para tomar la orden */}
//             {selectedProducts.map((product) => (
//                 <div className="orderTaked">
//                     <div className="descriptionProduct">
//                         <div
//                             id="iconOrderTaked"
//                             className="CardProductWaiter"
//                             key={product.id}
//                             onClick={() => handleClick(product)}
//                         >
//                             <p>{product.name}</p>
//                             <img width={'40px'} src={product.image} alt="product" />
//                             {/* Este precio no se modifica */}
//                             <p>s/ {product.price}</p>
//                         </div>

//                     </div>

//                     <div>
//                         <p className="nameProductOrder">{product.name}</p>
//                         {/* Aquí se tiene que actualizar el numero, sumando o restando el precio original del producto que se trae de la api dependiendo de si se hace click en boton de incrementar o decrementar */}
//                         <p className="price">S/ {product.price}</p>
//                     </div>
//                     <div className="iconosProductSelected">
//                         <div>
//                             <img
//                                 className="iconOrderTaked"
//                                 width={'25px'}
//                                 src={decrease}
//                                 onClick={() => handleQuantity("decrement")}
//                             ></img>
//                             {/* Aquí tiene que actualizarse el numero, sumando uno o restando uno dependiendo si se hace click en el boton de incrementar o decrementar */}
//                             <p style={{ color: "white" }}>{quantity}</p>
//                             <img
//                                 className="iconOrderTaked"
//                                 width={'25px'}
//                                 src={increase}
//                                 onClick={() => handleQuantity("increment")}
//                             ></img>
//                         </div>
//                         <div>
//                             <img className="iconOrderTaked" width={'25px'} src={cancel}></img>
//                         </div>
//                     </div>

//                 </div>
//             ))}

//         </>
//     )
// };

// export default OrderTaked;


// -----------------------------------------------------

// import decrease from "../img/decrease.png"
// import increase from "../img/increase.png"
// import cancel from "../img/cancel.png"


// const OrderTaked = ({ selectedProducts }) => {
//     return (
//         <>
//             {/* Estructura de las cartas que se van eligiendo para tomar la orden */}
//             {selectedProducts.map((product) => (
//                 <div className="orderTaked">
//                     <div className="descriptionProduct">
//                         <div
//                             id="iconOrderTaked"
//                             className="CardProductWaiter"
//                             key={product.id}
//                             onClick={() => handleClick(product)}
//                         >
//                             <p>{product.name}</p>
//                             <img width={'40px'} src={product.image} alt="product" />
//                             {/* Este precio no se modifica */}
//                             <p>s/ {product.price}</p>
//                         </div>

//                     </div>

//                     <div>
//                         <p className="nameProductOrder">{product.name}</p>
//                         {/* Aquí se tiene que actualizar el numero, sumando o restando el precio original del producto que se trae de la api dependiendo de si se hace click en boton de incrementar o decrementar */}
//                         <p className="price">S/ {product.price}</p>
//                     </div>
//                     <div className="iconosProductSelected">
//                         <div>
//                             <img className="iconOrderTaked" width={'25px'} src={decrease}></img>
//                             {/* Aquí tiene que actualizarse el numero, sumando uno o restando uno dependiendo si se hace click en el boton de incrementar o decrementar */}
//                             <p style={{ color: "white" }}>2</p>
//                             <img className="iconOrderTaked" width={'25px'} src={increase}></img>
//                         </div>
//                         <div>
//                             <img className="iconOrderTaked" width={'25px'} src={cancel}></img>
//                         </div>
//                     </div>

//                 </div>
//             ))}

//         </>
//     )
// };

// export default OrderTaked;

// ----------------------------------

// import decrease from "../img/decrease.png";
// import increase from "../img/increase.png";
// import cancel from "../img/cancel.png";
// import { useState } from "react";

// const OrderTaked = ({ selectedProducts }) => {
//   const [products, setProducts] = useState(selectedProducts);

//   const handleIncrease = (productId) => {
//     const updatedProducts = products.map((product) => {
//       if (product.id === productId) {
//         return { ...product, price: product.price + 1 }; // increase price by 1
//       } else {
//         return product;
//       }
//     });
//     setProducts(updatedProducts);
//   };

//   const handleDecrease = (productId) => {
//     const updatedProducts = products.map((product) => {
//       if (product.id === productId && product.price > 0) {
//         return { ...product, price: product.price - 1 }; // decrease price by 1
//       } else {
//         return product;
//       }
//     });
//     setProducts(updatedProducts);
//   };

//   const handleClick = (product) => {
//     console.log("Product clicked:", product);
//   };

//   return (
//     <>
//       {/* Estructura de las cartas que se van eligiendo para tomar la orden */}
//       {products.map((product) => (
//         <div className="orderTaked">
//           <div className="descriptionProduct">
//             <div
//               id="iconOrderTaked"
//               className="CardProductWaiter"
//               key={product.id}
//               onClick={() => handleClick(product)}
//             >
//               <p>{product.name}</p>
//               <img width={"40px"} src={product.image} alt="product" />
//               <p>s/ {product.price}</p>
//             </div>
//           </div>
//           <div>
//             <p className="nameProductOrder">{product.name}</p>
//             <p className="price">S/ {product.price}</p>
//           </div>
//           <div className="iconosProductSelected">
//             <div>
//               <img
//                 className="iconOrderTaked"
//                 width={"25px"}
//                 src={decrease}
//                 onClick={() => handleDecrease(product.id)}
//               ></img>
//               <p style={{ color: "white" }}>2</p>
//               <img
//                 className="iconOrderTaked"
//                 width={"25px"}
//                 src={increase}
//                 onClick={() => handleIncrease(product.id)}
//               ></img>
//             </div>
//             <div>
//               <img className="iconOrderTaked" width={"25px"} src={cancel}></img>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default OrderTaked;
