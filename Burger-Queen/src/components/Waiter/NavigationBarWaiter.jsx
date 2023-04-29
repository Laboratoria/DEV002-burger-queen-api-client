import React from 'react';
// import "../../../src/estilos/admin/navigationBar.css";
import waiter from '../img/waiter.png';
import orders from '../img/lista-de-verificacion.png';
import menu from '../img/menu.png'
import { Link, useLocation } from 'react-router-dom';

const NavigationBarWaiter = () => {
  const location = useLocation();
  console.log(location)
  const isEmployeesRoute = location.pathname === "/menuWaiter";
  console.log(isEmployeesRoute)


  //   crear nuevos estilos

  return (
    <nav className="navigation">
      <ul className="navigation__list">

        <li>
          <div id='item_menu' className="navigation__item" style={{ background: `${location.pathname === '/menuWaiter' ? "linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(150,91,91,1) 66%, rgba(107,61,61,1) 100%)" : ""}` }}>
            <img className='menu' src={menu} alt='menu'></img>
            <Link to="/WaiterMenu" id='menuWaiter' className='link'>Menu</Link>
          </div>
        </li>

        <li>
          <div className="navigation__item" style={{ background: `${location.pathname === '/WaiterOrders' ? "linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(150,91,91,1) 66%, rgba(107,61,61,1) 100%)" : ""}` }}>
            <img className='orders' src={orders} alt='orders'></img>
            <Link to="/WaiterOrders" id='' className='link'>Orders</Link>
          </div>
        </li>
        
        <li className="navigation__item">
          <img className='avatar' src={waiter}></img>
          <p>Waiter</p>
        </li>

      </ul>
    </nav>
  );
};

export default NavigationBarWaiter;
