import iconReady from "../img/cena.png"
import cenaSinColor from "../img/cenaSinColor.png"
import { getOrder } from "../../request";
import { useState, useEffect, React } from "react";
import { editOrder } from "../../request";

// const OrderList = () => {

//     const [orders1, setOrders1] = useState([]);

//     const getOrders = async () => {
//         const orders = await getOrder()
//         console.log('orders', orders)
//         setOrders1(orders);
//     };

//     useEffect(() => {
//         getOrders();
//     }, []);

//     return (
//         <>
//             {orders1.map((order) => (
//                 <div className="bodyList" key={order.id}>
//                     <div className="TopBodyListoOrder">
//                         <p>Pedido: 5</p>
//                         <p>{order.dateEntry}</p>
//                     </div>
//                     <p className="toClient">Para: {order.client}</p>
//                     <div className="BodyOrder">
//                         {/* <OnlyOrder orders={orders1} /> */}
//                         {orders1.map((order) => (
//                             <div className="dataOfOrder" key={order.id}>
//                                 {orders1.map((product) => (
//                                     <React.Fragment key={product.id}>
//                                         <p>{product.product.name}</p>
//                                         <p>{product.qty}</p>
//                                     </React.Fragment>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                     <img width="40px" src={iconReady} alt="icono-listo" />
//                 </div>
//             ))}
//         </>
//     )
// };

// VOLVER AQUÍ 


// const OrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [selectedOrderId, setSelectedOrderId] = useState(null);

//     const fetchOrders = async () => {
//         const fetchedOrders = await getOrder();
//         setOrders(fetchedOrders);
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     return (
//         <>
//             {orders.map((order) => (
//                 <div className="bodyList" key={order.id}>
//                     <div className="TopBodyListoOrder">
//                         <p>Pedido: {order.id}</p>
//                         <p>{order.dateEntry}</p>
//                     </div>
//                     <p className="toClient">Para: {order.client}</p>
//                     <div className="BodyOrder">
//                         <button onClick={() => setSelectedOrderId(order.id)}>Mostrar productos</button>
//                         {selectedOrderId === order.id && (
//                             <div onClick={() => setSelectedOrderId(order.id)}>
//                                 {order.products.map((product) => (
//                                     <div className="dataOfOrder" key={product.product.id}>
//                                         <p>{product.product.name}</p>
//                                         <img src={product.product.image} width={'20px'} alt={product.product.name} />
//                                         <p>Cantidad: {product.qty}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                     <img width="40px" src={iconReady} alt="icono-listo" />
//                 </div>
//             ))}
//         </>
//     );
// };

// 2.4  se pueden ver productos de la orden solo si se hace click en botón 

// const OrderList = () => {



//     const [orders, setOrders] = useState([]);

//     const fetchOrders = async () => {
//       const fetchedOrders = await getOrder();
//       setOrders(fetchedOrders);
//     };

//     useEffect(() => {
//       fetchOrders();
//     }, []);

//     // Creamos un objeto para almacenar el estado de cada orden
//     const [orderDetails, setOrderDetails] = useState({});

//     // Función para actualizar el estado de una orden en particular
//     const toggleOrderDetails = (orderId) => {
//       setOrderDetails((prevDetails) => ({
//         ...prevDetails,
//         [orderId]: !prevDetails[orderId],
//       }));
//     };

//     return (
//       <>
//         {orders.map((order) => (
//           <div className="bodyList" key={order.id}>
//             <div className="TopBodyListoOrder">
//               <p>Pedido: {order.id}</p>
//               <p>{order.dateEntry}</p>
//             </div>
//             <p className="toClient">Para: {order.client}</p>
//             <div className="BodyOrder">
//               <button onClick={() => toggleOrderDetails(order.id)}>Mostrar productos</button>
//               {orderDetails[order.id] && (
//                 <div>
//                   {order.products.map((product) => (
//                     <div className="dataOfOrder" key={product.product.id}>
//                       <p>{product.product.name}</p>
//                       <img src={product.product.image} width={'20px'} alt={product.product.name} />
//                       <p>Cantidad: {product.qty}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             {/* <img width="40px" src={iconReady} alt="icono-listo" /> */}
//             <img width="40px" src={cenaSinColor} alt="icono-listo-sin-color" onClick={() => updateOrderStatus(order.id)}/>
//           </div>
//         ))}
//       </>
//     );
//   };


// const OrderList = () => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const fetchedOrders = await getOrder();
//     setOrders(fetchedOrders);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const [orderDetails, setOrderDetails] = useState({});

//   const toggleOrderDetails = (orderId) => {
//     setOrderDetails((prevDetails) => ({
//       ...prevDetails,
//       [orderId]: !prevDetails[orderId],
//     }));
//   };

//   const updateOrderStatus = async (orderId) => {
//     const updatedOrder = await editOrder(orderId, { status: 'delivered' });
//     // Aquí podrías hacer algo con la orden actualizada, como por ejemplo actualizar la lista de órdenes
//   };

//   return (
//     <>
//       {orders.map((order) => (
//         <div className="bodyList" key={order.id}>
//           <div className="TopBodyListoOrder">
//             <p>Pedido: {order.id}</p>
//             <p>{order.dateEntry}</p>
//           </div>
//           <p className="toClient">Para: {order.client}</p>
//           <div className="BodyOrder">
//             <button onClick={() => toggleOrderDetails(order.id)}>Mostrar productos</button>
//             {orderDetails[order.id] && (
//               <div>
//                 {order.products.map((product) => (
//                   <div className="dataOfOrder" key={product.product.id}>
//                     <p>{product.product.name}</p>
//                     <img src={product.product.image} width={'20px'} alt={product.product.name} />
//                     <p>Cantidad: {product.qty}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <img
//             width="40px"
//             src={order.status === 'pending' ? cenaSinColor : iconReady}
//             alt="icono-listo"
//             onClick={() => {
//               updateOrderStatus(order.id);
//             }}
//           />
//         </div>
//       ))}
//     </>
//   );
// };

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const fetchedOrders = await getOrder();
    setOrders(fetchedOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Creamos un objeto para almacenar el estado de cada orden
  const [orderDetails, setOrderDetails] = useState({});

  // Función para actualizar el estado de una orden en particular
  const toggleOrderDetails = (orderId) => {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [orderId]: !prevDetails[orderId],
    }));
  };

  // Función para actualizar el estado de una orden a 'delivered'
  const markOrderAsDelivered = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "delivered" } : order
      )
    );
  };

  return (
    <>
      {orders.map((order) => (
        <div className="bodyList" key={order.id}>
          <div className="TopBodyListoOrder">
            <p>Pedido: {order.id}</p>
            <p>{order.dateEntry}</p>
          </div>
          <p className="toClient">Para: {order.client}</p>
          <div className="BodyOrder">
            <button onClick={() => toggleOrderDetails(order.id)}>
              Mostrar productos
            </button>
            {orderDetails[order.id] && (
              <div>
                {order.products.map((product) => (
                  <div className="dataOfOrder" key={product.product.id}>
                    <p>{product.product.name}</p>
                    <img
                      src={product.product.image}
                      width={"20px"}
                      alt={product.product.name}
                    />
                    <p>Cantidad: {product.qty}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {order.status === "pending" ? (
            <img
              width="40px"
              src={cenaSinColor}
              alt="icono-listo-sin-color"
              onClick={() => markOrderAsDelivered(order.id)}
            />
          ) : (
            <img
              width="40px"
              src={iconReady}
              alt="icono-listo-a-color"
            />
          )}
        </div>
      ))}
    </>
  );
};


export default OrderList;