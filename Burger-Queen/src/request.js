import axios from "axios";

const auth = async ({email, password}) => {
    let token = null;
     return await axios.post('http://127.0.0.1:8080/login', {email, password}, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    // .then(res => {
    //     token = {
    //         ...token,
    //         ok: false,
    //         status: res.status
    //     }
    //     return res.json()
    // })
    // .then(res => {
    //     token = {
    //         ok:(token.status == 200) ? true : false,
    //         message: (token.status == 200) ? 'Login' : res,
    //         token: (token.status == 200) ? res : null
    //     };
    // })
    // .catch(err => {
    //     token = {
    //         ok: false,
    //         message: 'Error of login',
    //         token: null
    //     }
    // });
    // return token;

}


// const GetProducts = async (type) => {
//     const token = localStorage.getItem("token");
//     const urlBurguerApi = "http://localhost:8080/products";
  
//     await axios.get(urlBurguerApi, {
//       headers: {
//         Authorization: 'Bearer ' + token
//       },
//       params: {
//         type: type // agregamos el parámetro "type" con el valor pasado como argumento
//       }
//     })
//     .then((response) => {
//       const data = response.data;
//       console.log(data);
//     });
//   };
  
const GetProducts = async (productType) => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = "http://localhost:8080/products";

    const response = await axios.get(urlBurguerApi, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const products = response.data.filter(product => product.type === productType);
    console.log(products);
};




// const GetProducts = async () => {
//     const token = localStorage.getItem("token");

//     const urlBurguerApi = "http://localhost:8080/products";

//     await axios.get(urlBurguerApi, {
//         headers: {
//           Authorization: 'Bearer ' + token //the token is a variable which holds the token
//         }
//     })
//         .then((response) => {
//         const data = response.data;
//         console.log(data);
//     });
// };

export {
    auth,
    GetProducts,
}