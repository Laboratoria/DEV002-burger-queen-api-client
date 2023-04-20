//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
// Puedo renombfrar BrowserRouter as Router. Route permite definir una ruta(al cambiar la url). Routes es el padre de Route
//import './App.css';
import './index.css'
import TakingOrder from './pages/TakingOrderPage.jsx';
import Kitchen from './pages/Kitchen.jsx';
import KitchenServed from './pages/KitchenServed.jsx';

import Staff from './pages/StaffPage.jsx';
import Products from './pages/ProductsPage.jsx';
import NotFound from './pages/NotFoundPage.jsx';

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<LoginPage/>}></Route>

      <Route path='/take-order' element = {<TakingOrder/>}></Route>

      <Route path='/kitchen' element = {<Kitchen/>}></Route>
      <Route path='/kitchen-served' element = {<KitchenServed/>}></Route>

      <Route path='/staff' element = {<Staff/>}></Route>
      <Route path='/products' element = {<Products/>}></Route>

      <Route path='*' element = {<NotFound/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}