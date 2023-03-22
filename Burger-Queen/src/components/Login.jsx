import '../estilos/login/login.css'
import { auth } from '../../src/auth.js';
import { useNavigate } from 'react-router-dom';
import React, { Fragment, useState } from 'react';
import logo from "./img/imgLogo.jpg";
import lyricsLogo from "./img/lyricsLogo.jpg";
import referenceFood from "./img/referenceFood.png";

const Login = () => {
  const onNavigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const { email, password } = credentials;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const enviarDatos = async (event) => {
    event.preventDefault();
    try {
      const response = await auth({ email, password });
      console.log('token', response);
      
      if (response.data.ok === true) {
        localStorage.setItem('token', response.data.token);
        // redirigir a la página principal
        onNavigate('/admin')
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
1  

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
                <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} value={email} name="email"></input>
              </label>
            </div>
            <div className="col-md-3">
              <label>
                Password:
                <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange}value={password} name="password"></input>
              </label>
            </div>
            <button type="submit" className="loginbtn">Login</button>
          </form>
          {error && <div className="alert alert-danger">{error}</div>}
          <div>
            <img src={referenceFood} alt="referenceFood" />
          </div>
        </section>
      </div>
    </Fragment>
  );
}


// const Login = () => {

//   const [datos, setDatos] = useState({
//     email: '',
//     password: ''
//   })

//   const handleInputChange = (event) => {
//     // console.log(event.target.name)
//     // console.log(event.target.value)
//     setDatos({
//       ...datos,
//       [event.target.name]: event.target.value
//     })
//   }

//   const enviarDatos = (event) => {
//     event.preventDefault()
//     console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
//   }

//   return (
//     <Fragment>
//       <div className='logo'>
//         <img className='lyrics-logo' src={lyricsLogo} alt="lyricsLogo" />
//         <img className='img-logo' src={logo} alt="logo" />
//       </div>
//       <h1 id='WAY'>Who are you?</h1>
//       <div className='loginContent'>
//         <section className='form'>
//           <form className="row" onSubmit={enviarDatos}>
//             <div className="col-md-3">
//               <label>
//                 Email:
//                 <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
//               </label>
//             </div>
//             <div className="col-md-3">
//               <label>
//                 Password:
//                 <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="password"></input>
//               </label>
//             </div>
//             <button type="submit" className="loginbtn">Login</button>
//           </form>
//           <div>
//             <img src={referenceFood} alt="referenceFood" />
//           </div>
//         </section>
//       </div>
//     </Fragment>
//   );
// }

export default Login;
