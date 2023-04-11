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

const postProducts = async ({ name, price, imagen, type }) => {
    const token = localStorage.getItem("token");
    const urlBurguerApi = "http://localhost:8080/products";
    console.log('postProducts')
    try {
        const response = await axios.post(urlBurguerApi, { name, price, imagen, type }, {
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
    GetProducts,
}