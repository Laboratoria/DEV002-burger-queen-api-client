import exitIcon from "../img/exitIcon.png"
import { postProducts } from "../../request";
import { useState } from "react";

const AddModal = ({ children, estado, cambiarEstado }) => {
    const [formValues, setFormValues] = useState({
        name: "",
        imagen: "",
      });
      
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
      
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setFormValues({ ...formValues, imagen: reader.result });
        };
      };
      
      const sendData = async (event) => {
        event.preventDefault();
        const { name, imagen } = formValues;
        await postProducts({ name, imagen });
        // Aquí puedes agregar cualquier otra acción después de enviar los datos.
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
                        <form onSubmit={sendData}>
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
                            {children}
                            <div className="formAddProduct">
                                <label className='label-form'>
                                    Imagen
                                    <input 
                                    type="file" 
                                    id="inputImage" 
                                    className="inputModalProduct" 
                                    name="imagen" 
                                    onChange={(e) => {
                                        handleImageChange(e);
                                        const file = e.target.files[0];
                                        const reader = new FileReader();
                                        reader.readAsDataURL(file);
                                        reader.onload = () => {
                                            const imgPreview = document.getElementById("img-preview");
                                            imgPreview.src = reader.result;
                                            imgPreview.style.display = "block";
                                        };
                                    }}
                                    
                                    ></input>
                                </label>
                            </div>
                            <div className="formAddProduct">
                                <img id="img-preview" style={{ display: "none", maxWidth: "20%", alignSelf: "center", marginBottom: "10px" }} />
                            </div>

                            <button type="submit" className="buttonAddModal">Añadir un nuevo producto</button>
                        </form>
                    </div>
                </div>
            }
        </div>

    )
};

export default AddModal;
