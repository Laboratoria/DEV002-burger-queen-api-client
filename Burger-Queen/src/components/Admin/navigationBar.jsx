import React from 'react';
import { Link } from 'react-router-dom';
import '../../estilos/admin/navigationBar.css';
import avatar from '../img/avatar-admin.png';
import orders from '../img/lista-de-verificacion.png';
import employees from '../img/reclutamiento.png';
import menu from '../img/menu.png'

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <img className='menu' src={menu}></img>
          <Link to="/menuAdmin" className='link'>Menu </Link>
        </li>
        <li className="navigation__item">
          <img className='orders' src={orders}></img>
          <Link to="/ordersAdmin" className='link'>Orders</Link>
        </li>
        <li className="navigation__item">
          <img className='employees' src={employees}></img>
          <Link to="/employees" className='link'>Employees</Link>
        </li>
        <li className="navigation__item">
          <img className='avatar' src={avatar}></img>
          <p>Admin</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
