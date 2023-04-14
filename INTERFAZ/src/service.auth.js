//service: donde irán mis peticiones



//-----------------------para autenticar a los usuarios en LoginPage----------------------------------
export const autenticar = async ({ email, password }) => { //mi componente tiene que esperar a que mi servicio se ejecute por completo para que el token no me lo devuelva en blanco
  let token = null;
  await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",

      //"Authorization": "Bearer (token)"    //sin paréntesisis. Para tener acceso para el resto de rutas
    },

    body: JSON.stringify({ email, password }) //JSON a texto plano
  })
    .then(res => {
      token = {
        ...token,
        ok: false,
        status: res.status
      }
      return res.json()
    })
    .then(res => {

      console.log('res', res)
      token = {
        ok: (token.status == 200) ? true : false, //respuesta correcta
        message: (token.status == 200) ? "Login ejecutado de forma correcta" : res,
        token: (token.status == 200) ? res : null
      };
    })
    .catch(error => {
      //console.log(error, error.response)
      token = {
        ok: false,
        message: "Error de logueo",
        token: null

      }
    });
  return token;

}
//------------------------para cerrar sesión(remove token)-----------------------------------


export function logOut() {
  console.log('cerrando sesión')
  //aquí destruiría el acces token
}

//------------------------para obtener los productos disponibles-----------------------------------

export const getProductos = async (token) => { //mi componente tiene que esperar a que mi servicio se ejecute por completo para que el token no me lo devuelva en blanco
  //console.log(token);
  let respuesta = null;
  await fetch('http://localhost:8080/products', {
    method: 'GET', //no lleva body
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + token   //sin paréntesisis. Para tener acceso para el resto de rutas
    },

  })
    .then(res => {
      //console.log(res)
      return res.json()
    })
    .then(res => {
      respuesta = res;
       console.log('res', res)
    })
    .catch(error => {
      console.log(error, error.response, "Error al traer los productos")
    });
  return respuesta;

}


//---------------------------para tomar pedido de cliente-----------------------------------------------------------------

export const postOrden = async (token, idWaiter, nameClient, arrayProductsQtys) => {
  let respuesta = null;

  await fetch('http://localhost:8080/orders', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + token   //sin paréntesisis. Para tener acceso para el resto de rutas
    },
    body: JSON.stringify({ 
      "userId": idWaiter,
      "client": nameClient,
      "products":arrayProductsQtys,
      "status": "pending",
      "dateEntry": (new Date()).toLocaleString(),   
    }) //JSON a texto plano

  })
    .then(res => {
      //console.log(res)
      return res.json()
    })
    .then(res => {
      respuesta = res;
      //console.log('res', res)
    })
    .catch(error => {
      console.log(error, error.response, "Error al crear una nueva orden")
    });
  return respuesta;


}




//---------------------------para obtener a los trabajadores-----------------------------------------------------------------

export const getTrabajadores = async (token) => { //mi componente tiene que esperar a que mi servicio se ejecute por completo para que el token no me lo devuelva en blanco
  //console.log(token);
  let respuesta = null;
  await fetch('http://localhost:8080/users', {
    method: 'GET', //no lleva body
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + token   //sin paréntesisis. Para tener acceso para el resto de rutas
    },

  })
    .then(res => {
      //console.log(res)
      return res.json()
    })
    .then(res => {
      respuesta = res;
      //console.log('res', res)
    })
    .catch(error => {
      console.log(error, error.response, "Error al traer los trabajadores")
    });
  return respuesta;

}

//---------------------------para crear un nuevo trabajador-----------------------------------------------------------------

export const addNuevoTrabajador = async (token, email, password, role) => { //mi componente tiene que esperar a que mi servicio se ejecute por completo para que el token no me lo devuelva en blanco
  await fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + token    //sin paréntesisis. Para tener acceso para el resto de rutas
    },

    body: JSON.stringify({ email, password, role }) //JSON a texto plano
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => {
      console.log(error, error.response)
    });
  return token;

}

//---------------------------para eliminar un trabajador-----------------------------------------------------------------

export const deleteTrabajador = async (token, idUser) => {
  // console.log("borrando usuario "+idUser)
  await fetch('http://localhost:8080/users' + "/" + idUser, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + token    //sin paréntesisis. Para tener acceso para el resto de rutas
    },
    // No need to have body, because we don't send nothing to the server.
  })
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it (hacer getTrabajdores)
    .catch(err => console.log(err)) // Do something with the error

}

//---------------------------para obtener info de un trabajador a aprtir de su id-----------------------------------------------------------------

export const getTrabajador = async(token, idUser) => {
  let respuesta = null;

  await fetch('http://localhost:8080/users' + "/" + idUser, {
    method: 'GET', //no lleva body
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + token   //sin paréntesisis. Para tener acceso para el resto de rutas
    },

  })
  .then(response => response.json())
  .then(data => {console.log(data);
  respuesta=data}) // Manipulate the data retrieved back, if we want to do something with it (hacer getTrabajdores)
  .catch(err => console.log(err)) 
  return respuesta;
}

//---------------------------actualizando el trabajador-----------------------------------------------------------------

export const updateTrabajador = async (token, idUser, mail, pass, rol) => {
  fetch('http://localhost:8080/users' + "/" + idUser, {
    method: 'PATCH',
    body: JSON.stringify({
      email: mail,
      password: pass,
      role: rol

    }),
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + token    //sin paréntesisis. Para tener acceso para el resto de rutas
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

}


















//debo agregar el token de obtenido en auth para
// const urlAPI='http://localhost:8080/';
// const ensayo=fetch(urlAPI+'products');
// //console.log(ensayo);
// const resultado=ensayo.then(data=> {return data.json();})
// //console.log(resultado);
// resultado.then(console.log)

// const urlAPI = 'http://localhost:8080/';
// const ensayo = fetch(urlAPI + 'auth');
// //console.log(ensayo);
// const resultado = ensayo.then(data => { return data.json(); })
// //console.log(resultado);
// resultado.then(console.log)