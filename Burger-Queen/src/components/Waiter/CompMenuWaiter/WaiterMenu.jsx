import increase from "../../img/increase.png"
import decrease from "../../img/decrease.png"
import cancel from "../../img/cancel.png"
import NavigationBarWaiter from "../NavigationBarWaiter";
import "../../../estilos/admin/navigationBar.css";
import { useState, useEffect } from "react";
import Logotype from "../../../components/Admin/logotype.jsx"
import OnlyButtonsWaiter from "../OnlyButtonsWaiter";
import trash from "../../img/trash.png"
import CardProductWaiter from "../CardProductWaiter";
import { GetProducts, postOrder } from "../../../request";

const Waiter = () => {

    // ------------------------

    const [selectedProducts, setSelectedProducts] = useState([]);

    //  Función para agregar un producto a la lista de productos seleccionados
    const handleProductClick = (product) => {
        setSelectedProducts((prevProducts) => [...prevProducts, product]);
    };

    // -------------------------

    const [productsWaiter, setProductsWaiter] = useState([]);

    const handleBreakfastClickWaiter = async () => {
        const data = await GetProducts();
        const filteredProducts = data.filter(
            (product) => product.type === "Desayuno"
        );
        console.log('filteredProducts', filteredProducts)
        setProductsWaiter(filteredProducts);
    };

    const handleLunchClickWaiter = async () => {
        const data = await GetProducts();
        const filteredProducts = data.filter(
            (product) => product.type === "Almuerzo"
        );
        setProductsWaiter(filteredProducts);
    };

    const [sumaT, setSumaT] = useState();

    // const [productQuantity, setProductQuantity] = useState({});

    // const handleDecrease = (productId) => {
    //     setProductQuantity((prevQuantity) => ({
    //         ...prevQuantity,
    //         [productId]: (prevQuantity[productId] || 1) - 1,
    //     }));
    // };

    // const handleIncrease = (productId) => {
    //     setProductQuantity((prevQuantity) => ({
    //         ...prevQuantity,
    //         [productId]: (prevQuantity[productId] || 1) + 1,
    //     }));
    // };

    // const handleCancel = (productId) => {
    //     setProductQuantity((prevQuantity) => ({
    //         ...prevQuantity,
    //         [productId]: 0,
    //     }));
    //     setSelectedProducts((prevProducts) =>
    //         prevProducts.filter((product) => product.id !== productId)
    //     );
    // };

    // useEffect(() => {
    //     const prices = selectedProducts.map(product => product.price * (productQuantity[product.id] || 1));
    //     const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //     setSumaT(total);
    // }, [selectedProducts, productQuantity]);


    // // -------------------------------
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log('inputValue', inputValue)
    };

    // // -------------------------------
    const [tableNumber, setTableNumber] = useState('');

    const handleTableNumberChange = (event) => {
        setTableNumber(event.target.value);
    }

    // // -------------------------------
    const [status, setStatus] = useState('pending');

    // // -------------------------------
    const [fechaCreacion, setFechaCreacion] = useState('');

    const handledate = () => {
        const fecha = new Date();
        setFechaCreacion(fecha.toString());
        console.log('fecha de creacion', fecha)
    };


    // const order = {
    //     client: inputValue,
    //     tableNumber: tableNumber, // valor del número de mesa seleccionado
    //     products: [ //array de productos seleccionados
    //         {
    //             qty: ,
    //             product: {
    //                 id: ,
    //                 name: ,
    //                 price: ,
    //                 image: ,
    //                 type: ,
    //                 dateEntry: fechaCreacion
    //             }
    //         }
    //     ],
    //     status: status, //status e la orden
    //     dateEntry: fechaCreacion, //fecha de creación de la orden

    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Usa la constante `inputValue` aquí para hacer algo con el valor del input
    //     console.log(`El valor del input es: ${inputValue}`);
    //     handledate()
    //     postOrder(order);
    // };

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

    // ...

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`El valor del input es: ${inputValue}`);
        handledate();

        // Crear el array de productos de la orden
        const productsOrder = selectedProducts.map(product => ({
            qty: productQuantity[product.id] || 1,
            product: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                type: product.type,
                dateEntry: fechaCreacion
            }
        }));

        // Asignar los valores necesarios al objeto order
        const order = {
            client: inputValue,
            tableNumber: tableNumber,
            products: productsOrder,
            status: status,
            dateEntry: fechaCreacion,
        };

        await postOrder(order);
    };

    return (
        <div className="container">
            <div className="logotype">
                <Logotype />
            </div>
            <div className="admiContainer">
                <div className="navigationBar">
                    <NavigationBarWaiter />
                </div>
                <div className="cards">
                    <div className="leftAndRigthWaiter">
                        <div className="buttonsAndCardsWaiter">
                            <div className="buttonsOrders">
                                <OnlyButtonsWaiter
                                    onBreakfastClickWaiter={handleBreakfastClickWaiter}
                                    onLunchClickWaiter={handleLunchClickWaiter}
                                />
                            </div>
                            <div className="overflowCardProductWaiter">
                                {/* renderiza las cartas de los productos */}
                                <p style={{ color: 'white' }}>Productos</p>

                                <CardProductWaiter
                                    // key={product.id}
                                    products={productsWaiter}
                                    onProductClick={handleProductClick}
                                    onClick={() => handleProductClick(product)}
                                />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="rightSideListOrder">
                                <div className="topOrderListWaiter">
                                    <p className="order"></p>
                                    <img className="iconOrderTaked" src={trash} width={'40px'} height={'40px'}></img>
                                </div>
                                <div className="row">
                                    <div className="labelNameWaiter">
                                        <label className='labelWaiter'>
                                            Nombre del cliente
                                            <input
                                                type="text"
                                                placeholder="Nombre del cliente"
                                                className="inputWaiter"
                                                onChange={handleInputChange}></input>
                                        </label>
                                    </div>
                                    <div className="labelTableWaiter">
                                        <label className='labelWaiter'>
                                            N° de mesa
                                            <select className="inputWaiter" defaultValue="" onClick={handleTableNumberChange}>
                                                <option value="" disabled>N° de mesa</option>
                                                <option value="mesa1">mesa 1</option>
                                                <option value="mesa2">mesa 2</option>
                                                <option value="mesa3">mesa 3</option>
                                                <option value="mesa4">mesa 4</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="ListOrdersWaiter">
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
                                    </>
                                </div>
                                <div>
                                    <p className="cost">Costo total: S/ {sumaT}</p>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        id="inputSendWaiter"
                                        className="inputWaiter"
                                    >Enviar al chef</button>
                                    <button
                                        id="inputSaveWaiter"
                                        className="inputWaiter">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Waiter;