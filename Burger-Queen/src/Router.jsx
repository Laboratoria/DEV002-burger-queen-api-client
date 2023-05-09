import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Admin/Menu';
import OrdersAdmin from './components/Admin/compMenu/ordersAdmin';
import Employees from './components/Admin/compMenu/employees';
import WaiterMenu from './components/Waiter/CompMenuWaiter/WaiterMenu';
import WaiterOrders from './components/Waiter/CompMenuWaiter/WaiterOrders';
import HeadChef from './components/headChef/headChef';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        {/* Admi */}
        <Route path="/menuAdmin" element={<Menu />} />
        <Route path='/ordersAdmin' element={<OrdersAdmin />} />
        <Route path='/employees' element={<Employees />} />
        {/* Waiter */}
        <Route path='/menuWaiter' element={<WaiterMenu />} />
        <Route path='/menuOrders' element={<WaiterOrders />} />
        {/* Jefe de cocina */}
        <Route path='/headChef' element={<HeadChef />}/>
      </Routes>
    </Router>
  );
}

export default App;
