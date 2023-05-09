import React, { useState } from 'react';
import '../../estilos/admin/navigationBar.css';
import headChef from '../img/headChef.png';
import orders from '../img/lista-de-verificacion.png';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavigationBarHeadChef = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  location.pathname === "/employees";

  const handleAvatarClick = () => {
    setShowLogoutButton(!showLogoutButton);
  };

  const handleLogoutButtonClick = () => {
    localStorage.removeItem('token');
    console.log('sesión cerrada');
    navigate('/');
  };

  const displayBlockButtonLogout = () => {
    setShowLogoutButton(true);
  }

  return (
    <nav className="navigation">
      <ul className="navigation__list">

        <li>
          <div className="navigation__item" style={{ background: `${location.pathname === '/headChef' ? "linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(150,91,91,1) 66%, rgba(107,61,61,1) 100%)" : ""}` }}>
            <img className='orders' src={orders} alt='orders'></img>
            <Link to="/ordersAdmin" id='orders' className='link'>Orders</Link>
          </div>
        </li>

        <li className="navigation__item">
          {showLogoutButton && (
            <button className='logoutButton' onClick={handleLogoutButtonClick}>
              Cerrar sesión
            </button>
          )}
          <img className='avatar' onClick={handleAvatarClick} src={headChef}></img>
          <p>Head Chef</p>
        </li>

      </ul>
    </nav>
  );
};

export default NavigationBarHeadChef;
