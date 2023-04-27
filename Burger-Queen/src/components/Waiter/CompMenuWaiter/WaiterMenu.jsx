import React from "react";
import NavigationBarWaiter from "../NavigationBarWaiter";
import "../../../estilos/admin/navigationBar.css";
import { useState } from "react";
import Logotype from "../../../components/Admin/logotype.jsx"
import OnlyButtonsWaiter from "../OnlyButtonsWaiter";
import trash from "../../img/trash.png"
import CardProductWaiter from "../CardProductWaiter";
import OrderTaked from "../OrderTaked";
import { GetProducts } from "../../../request";

const Waiter = () => {

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
                                <p style={{ color: 'white' }}>productos</p>
                                <CardProductWaiter 
                                products={productsWaiter}
                                />
                            </div>
                        </div>
                        <div className="rightSideListOrder">
                            <div className="topOrderListWaiter">
                                <p className="order">Pedido: 7</p>
                                <img className="iconOrderTaked" src={trash} width={'40px'} height={'40px'}></img>
                            </div>
                            <section className='form'>
                                <form className="row">
                                    <div className="labelNameWaiter">
                                        <label className='labelWaiter'>
                                            Nombre del cliente
                                            <input type="text" placeholder="Nombre del cliente" className="inputWaiter"></input>
                                        </label>
                                    </div>
                                    <div className="labelTableWaiter">
                                        <label className='labelWaiter'>
                                            N° de mesa
                                            <select className="inputWaiter">
                                                <option value="" disabled selected>N° de mesa</option>
                                                <option value="mesa1">mesa 1</option>
                                                <option value="mesa2">mesa 2</option>
                                                <option value="mesa3">mesa 3</option>
                                                <option value="mesa4">mesa 4</option>
                                            </select>
                                        </label>
                                    </div>
                                </form>
                            </section>
                            <div className="ListOrdersWaiter">
                                <OrderTaked />
                            </div>
                            <div>
                                <p className="cost">Costo total: s/ 80</p>
                            </div>
                            <div>
                                <button id="inputSendWaiter" className="inputWaiter">Enviar al chef</button>
                                <button id="inputSaveWaiter" className="inputWaiter">Guardar</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Waiter;