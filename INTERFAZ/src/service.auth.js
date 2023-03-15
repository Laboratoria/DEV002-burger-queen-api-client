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
    
    body: JSON.stringify({ email, password })
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

      //console.log('res', res)
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


//------------------------para obtener los productos disponibles-----------------------------------

export const getProductos = async (token) => { //mi componente tiene que esperar a que mi servicio se ejecute por completo para que el token no me lo devuelva en blanco
 //console.log(token);
 let respuesta=null;
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
      respuesta=res;
      //console.log('res', res)
    })
    .catch(error => {
      console.log(error, error.response, "Error al traer los productos")
    });
  return respuesta;

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