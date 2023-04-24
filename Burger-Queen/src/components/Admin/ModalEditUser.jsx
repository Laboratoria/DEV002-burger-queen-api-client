import exitIcon from "../img/exitIcon.png"
import { editUser } from "../../request";
import { useState } from "react";

const ModalEditUsers = ({ estado, cambiarEstado }) => {

    const [role, setRole] = useState(null);
     const id = localStorage.getItem("userId");

    const handleTypeChange = (event) => {
        event.preventDefault();
        const value = event.target.id;
        console.log('value', value)
        setRole(value);
        setFormValues({ ...formValues, role: value });
    };

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handlePasswordChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setFormValues({ ...formValues, image: reader.result });
        };
    };

    const editData = async (event) => {
        event.preventDefault();
        const { name, email, password, role, image } = formValues;

        if (email && password && role) {
            const object = {
                name: name,
                email: email,
                password: password,
                role: role,
                image: image,
            }
            await editUser(id, object);
            cambiarEstado(false);
            localStorage.removeItem("userId");
        }
    };

    return (
        <div>
            {estado &&
                <div className="overlay">
                    <div className="headOfModal">
                        <p className="messageError">Texto de Error</p>
                        <img onClick={() => cambiarEstado(false)} className="exitIcon" src={exitIcon} />
                    </div>
                    <div className="bodyOfModal">
                        <form onSubmit={editData}>
                            <div className="formAddProduct">
                                <label className='label-form'>
                                    Nombre
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="inputModalProduct"
                                        name="name"
                                        onChange={handleInputChange}
                                    ></input>
                                </label>
                            </div>
                            {/*  */}
                            <div className="formAddProduct">
                                <label className='label-form'>
                                    Correo
                                    <input
                                        type="text"
                                        placeholder="Correo"
                                        className="inputModalProduct"
                                        name="email"
                                        onChange={handleInputChange}
                                    ></input>
                                </label>
                            </div>
                            <div className="formAddProduct">
                                <label className='label-form'>
                                    Contraseña
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        className="inputModalProduct"
                                        name="password"
                                        onChange={handlePasswordChange}
                                    ></input>
                                </label>
                            </div>
                            <div className="formAddProduct">
                                <label className='label-form'>
                                    Tipo
                                    <button id="cooks" value={role} onClick={handleTypeChange} className="buttonsOfCategory">Cocinera(o)</button>
                                    <button id="waiters" value={role} onClick={handleTypeChange} className="buttonsOfCategory">Mesera(o)</button>
                                </label>
                            </div>
                            {/*  */}
                            <div className="formAddProduct">
                                <label className='label-form'>
                                    Imagen
                                    <input
                                        type="file"
                                        id="inputImage"
                                        className="inputModalProduct"
                                        name="image"
                                        onChange={(e) => {
                                            handleImageChange(e);
                                            const file = e.target.files[0];
                                            // console.log('file' , file)
                                            const reader = new FileReader();
                                            console.log('reader', reader)
                                            reader.readAsDataURL(file);
                                            // console.log('b', b)
                                            reader.onload = () => {
                                                const imgPreview = document.getElementById("img-preview");
                                                const src = imgPreview.src = reader.result;
                                                // console.log('src', src)
                                                imgPreview.style.display = "block";
                                            };
                                        }}

                                    ></input>
                                </label>
                            </div>
                            <div className="formAddProduct">
                                <img id="img-preview" src={formValues.image} alt="" style={{ display: "none", maxWidth: "100%" }} />
                            </div>
                            <div id="buttonModal">
                                <button id="buttonModal" type="submit" className="buttonAddModal">Añadir un nuevo producto</button>
                            </div>


                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default ModalEditUsers;