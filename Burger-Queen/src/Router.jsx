import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Admin/Menu';
import OrdersAdmin from './components/Admin/compMenu/ordersAdmin';
import Employees from './components/Admin/compMenu/employees';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menuAdmin" element={<Menu />} />
        <Route path='/ordersAdmin' element={<OrdersAdmin />} />
        <Route path='/employees' element={<Employees />} />
      </Routes>
    </Router>
  );
}

export default App;
