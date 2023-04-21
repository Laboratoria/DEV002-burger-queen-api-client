import React from 'react';
import '../../estilos/admin/navigationBar.css';
import avatar from '../img/avatar-admin.png';
import orders from '../img/lista-de-verificacion.png';
import employees from '../img/reclutamiento.png';
import menu from '../img/menu.png'
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();
  console.log(location)
  const isEmployeesRoute = location.pathname === "/employees";
  console.log(isEmployeesRoute)

  return (
    <nav className="navigation">
      <ul className="navigation__list">

        <li>
          <div id='item_menu' className="navigation__item" style={{ background: `${location.pathname === '/menuAdmin' ? "linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(150,91,91,1) 66%, rgba(107,61,61,1) 100%)": ""}` }}>
            <img className='menu' src={menu} alt='menu'></img>
            <Link to="/menuAdmin" id='menuAdmin' className='link'>Menu </Link>
          </div>
        </li>

        <li>
          <div className="navigation__item" style={{ background: `${location.pathname === '/ordersAdmin' ? "linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(150,91,91,1) 66%, rgba(107,61,61,1) 100%)": ""}` }}>
            <img className='orders' src={orders} alt='orders'></img>
            <Link to="/ordersAdmin" id='orders' className='link'>Orders</Link>
          </div>
        </li>

        <li>
          <div className="navigation__item" style={{ background: `${location.pathname === '/employees' ? "linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(150,91,91,1) 66%, rgba(107,61,61,1) 100%)": ""}` }}>
            <img className="employees" src={employees} alt="Employees"></img>
            <Link id="employees" to="/employees" className='link'>Employees</Link>
          </div>
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
