import React from 'react';
import { Link } from 'react-router-dom';
import '../../estilos/admin/navigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/menuAdmin">Menu</Link>
        </li>
        <li className="navigation__item">
          <Link to="/ordersAdmin">Orders</Link>
        </li>
        <li className="navigation__item">
          <Link to="/employees">Employees</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
