import axios from "axios";

const auth = async ({ email, password }) => {
    let token = null;
    return await axios.post('http://127.0.0.1:8080/login', { email, password }, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
};

const postProducts = async ({ name, price, image, type }) => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = "http://localhost:8080/products";
    console.log('postProducts')
    try {
        const response = await axios.post(urlBurguerApi, { name, price, image, type }, {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json',
            },
        });
        const data = response.data;
        console.log(data)
        return data;
    } catch (error) {
        console.log('error', error)
    }
}

const editProduct = async (id) => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = `http://localhost:8080/products/${id}`;
    const headers = {
      Authorization: "Bearer " + token,
      'Content-Type': 'application/json',
    };
    const data = {
        name:"",
        price:"",
        image:"",
        type:"",
    }
    try {
      await axios.put(urlBurguerApi, data, { headers });
      console.log('El producto ha sido actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };


const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = `http://localhost:8080/products/${id}`; // Agregar el ID del producto a la URL
    try {
        await axios.delete(urlBurguerApi, {
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.log('error', error)
    }
}



// Llamada a la función deleteProduct con el ID del producto a eliminar
// const productId = 10;
// deleteProduct();


// const deleteProduct = async () => {
//     const token = localStorage.getItem("token");
//     const urlBurguerApi = "http://localhost:8080/products";
//     try {
//         const response = await axios.delete(urlBurguerApi, {
//             method: 'DELETE',
//             headers: {
//                 Authorization: "Bearer " + token,
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = response.data;
//         console.log(data)
//         return data;
//     } catch (error) {
//         console.log('error', error)
//     }
// }

const GetProducts = async () => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = "http://localhost:8080/products";
    // console.log('getProducts')
    try {
        const response = await axios.get(urlBurguerApi, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        const data = response.data;
        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
    }
};

export {
    auth,
    postProducts,
    deleteProduct,
    GetProducts,
    editProduct,
}