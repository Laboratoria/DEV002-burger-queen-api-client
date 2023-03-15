//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
// Puedo renombfrar BrowserRouter as Router. Route permite definir una ruta(al cambiar la url). Routes es el padre de Route
//import './App.css';
//import './style.css'
import TakingOrder from './pages/TakingOrderPage.jsx';


export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<LoginPage/>}></Route>
      <Route path='/take-order' element = {<TakingOrder/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}