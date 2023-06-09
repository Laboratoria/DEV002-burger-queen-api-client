import "./css-pages/staff.css"
import { FaSignOutAlt, FaPlusSquare, FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getProductos, logOut } from "../service.auth";
import { useEffect, useState } from "react";
const Product = (props) => {

    return (

        <tr>
            <td className="worker-rol">{props.id}</td>
            <td className="worker-email">{props.tipo}</td>
            <td className="worker-contraseña">{props.nombre}</td>
            <td className="product-imagen-container"><img className="product-imagen" src={props.imagen} alt=""/></td>
            <td className="worker-rol">{props.precio}</td>
            <td><FaTrash className="flow-icon" size={"1rem"} color="black" onClick={() => EliminarProducto(props.id)} /></td>
            <td><FaEdit className="flow-icon" size={"1rem"} color="black" onClick={() => props.ActualizarProducto(props.id)} /></td>


        </tr>
    )
}



export default function Products() {
    const [products, setProducts] = useState([]);

    const obtProducts = async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.accessToken;

        const productos = await getProductos(token);
        setProducts(productos);
        console.log(products);
    }

    useEffect(() => {
        obtProducts();
    }, []);

    return (
        <div className="staff-page">
            <div className="staff-h2">
                <h2>Productos</h2>
                <div className="log-out">
                    <Link to="/" >
                        <FaSignOutAlt className="flow-icon" size={"2rem"} />
                    </Link>
                </div>
            </div>
            <div className="botones-menu">
                <button><Link to="/staff"> Trabajadores </Link></button>
                <button><Link to="/products"> Productos</Link></button>
            </div>

            {/*------------agregar un nuevo producto---------------------- */}

            <button className="btn-add-worker"><FaPlusSquare className="flow-icon" size={"2rem"} />crear producto</button>
            {/*------------ tabla de productos---------------------- */}
            <table id='table-products'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Nombre</th>
                        <th>Imagen</th>

                        <th>Precio</th>

                        <th>Eliminar</th>
                        <th>Editar</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {

                        return (
                            <Product key={product.id}
                                tipo={product.type}
                                nombre={product.name}
                                precio={product.price}
                                id={product.id}
                                imagen={product.image}

                            />
                        )
                    })}
                </tbody>
            </table>


        </div>)
}

