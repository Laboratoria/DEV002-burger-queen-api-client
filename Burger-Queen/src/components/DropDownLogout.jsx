import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const logout = () => {
    try {
      localStorage.removeItem('token');
      console.log('sesión cerrada');
      // Redireccionar a la página de inicio de sesión
      navigate('/');
    } catch (error) {
      console.error('error al cerrar sesión', error);
    }
  };

  return (
    <button onClick={logout} className='logoutButton'>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
