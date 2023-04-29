import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// const token = localStorage.getItem("token");

// Usuario hace login 
const auth = async ({ email, password }) => {
    return await axios.post('http://127.0.0.1:8080/login', { email, password }, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
};

// Función para cerrar sesión
const logout = () => {
    try {
        localStorage.removeItem('token');
        console.log('sesión cerrada');
        // Redireccionar a la página de inicio de sesión
        // Usar useNavigate dentro de un componente
        useNavigate('/')

    } catch (error) {
        console.error('error al cerrar sesión', error);
    }
};

// logout()


// Traer a todos los usuarios
const getUsers = async () => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = "http://localhost:8080/users";
    try {
        const response = await axios.get(urlBurguerApi, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        const data = response.data;
        console.log('data', data)
        return data;
    } catch (error) {
        console.log('error', error)
    }
};

//Añadir a un nuevo usuario
const addEmployee = async ({ name, email, password, role, image }) => {

    const token = localStorage.getItem("token");
    const urlBurguerApi = "http://localhost:8080/users";
    console.log('postProducts')
    try {
        const response = await axios.post(urlBurguerApi, { name, email, password, role, image }, {
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
        console.log('error de request', error)
    }
};

// Editar a un usuario existente
const editUser = async (id, object) => {
    const urlBurguerApi = `http://localhost:8080/users/${id}`;
    console.log('urlBurguerApi', urlBurguerApi)
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: "Bearer " + token,
        'Content-Type': 'application/json',
    };
    try {
        await axios.put(urlBurguerApi, object, { headers });
        console.log('El usuario ha sido actualizado con éxito');
    } catch (error) {
        console.log('Error al actualizar el producto:', error)
    }
};

// Eliminar a un usuario
const deleteUser = async (id) => {
    const urlBurguerApi = `http://localhost:8080/users/${id}`;
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: "Bearer " + token,
        'Content-Type': 'application/json',
    };

    try {
        await axios.delete(urlBurguerApi, {
            headers: headers
        });
        console.log('Se eliminó al usuario')
    } catch (error) {
        console.log('error', error);
    }
};


// Añadir un nuevo producto
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
};

// Editar un producto existente en API REST
const putProducts = async (id, object) => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = `http://localhost:8080/products/${id}`;
    const headers = {
        Authorization: "Bearer " + token,
        'Content-Type': 'application/json',
    };
    try {
        await axios.put(urlBurguerApi, object, { headers });
        console.log('El producto ha sido actualizado con éxito');
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
    }
};

// Eliminar un producto
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
};

// Traer a todos los productos
const GetProducts = async () => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = "http://localhost:8080/products";
    try {
        const response = await axios.get(urlBurguerApi, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
};





export {
    auth,
    logout,
    postProducts,
    deleteProduct,
    GetProducts,
    putProducts,
    getUsers,
    addEmployee,
    editUser,
    deleteUser,
}