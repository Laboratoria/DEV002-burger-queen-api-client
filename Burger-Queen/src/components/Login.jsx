// import { useState } from 'react'
import '../estilos/login/login.css'

import React, { Fragment, useState } from 'react';
import logo from "./img/imgLogo.jpg";
import lyricsLogo from "./img/lyricsLogo.jpg";
import referenceFood from "./img/referenceFood.png";

const Login = () => {

  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
  }

  return (
    <Fragment>
      <div className='logo'>
        <img className='lyrics-logo' src={lyricsLogo} alt="lyricsLogo" />
        <img className='img-logo' src={logo} alt="logo" />
      </div>
      <h1 id='WAY'>Who are you?</h1>
      <div className='loginContent'>
        <section className='form'>
          <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-3">
              <label>
                Email:
                <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
              </label>
            </div>
            <div className="col-md-3">
              <label>
                Password:
                <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="password"></input>
              </label>
            </div>
            <button type="submit" className="loginbtn">Login</button>
          </form>
          <div>
            <img src={referenceFood} alt="referenceFood" />
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Login;
