import React, { useState } from "react"
import { autenticar } from "../service.auth.js";
import "./css-pages/login.css"
import { useNavigate } from 'react-router-dom'


export default function LoginPage() {
	const navigate = useNavigate();

	const [login, setLogin] = useState({
		email: "",
		password: ""
	});

	const { email, password } = login;

	const onChangeLogin = (e) => {
		setLogin({
			...login, //me trae los valores de los campos anteriores
			[e.target.name]: e.target.value, //actualiza los valores con lo que puso el usuario en los input 
			//email: ("email"== e.target.name) ? e.target.value : login.email
		})
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		//console.log("login", email, password)
		const resp = await autenticar({ email, password });
		console.log("token", resp.token.accessToken); 
		if (resp.ok == true) {
			localStorage.setItem('user', JSON.stringify(resp.token)) //para guardar como texto mi objeto para poder guardarlo en el local storage(no se puede guardar como objeto)
			//al desloguearme logOut debo eliminar el token
			//localStorage.removeItem('user')
			//para usar user
			//const user = JSON.parse(localStorage.getItem('user'))   //para convertir mi texto a objeto para poder usar el token y usuario
			navigate('/take-order')
		}
		else {
			alert(resp.message);
		}

	}


	return (
		<div className="login-page">
			<pre>{email} {password}</pre>


			<form className="contenedor-form " onSubmit={onSubmit} >
				<label>
					Correo:
					<input type="email" name="email" value={email} onChange={onChangeLogin} />
				</label>
				<label>
					contraseña:
					<input type="password" name="password" value={password} onChange={onChangeLogin} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>

	)
}