import exitIcon from "../img/exitIcon.png"
import { postProducts } from "../../request";
import { useState } from "react";

const AddModal = ({ children, estado, cambiarEstado, props }) => {

    const { price, type } = props;

    const [formValues, setFormValues] = useState({
        name: "",
        image: "",
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
          setFormValues({ ...formValues, image: reader.result });
        };
      };
      
      const sendData = async (event) => {
        event.preventDefault();
        const { name, image } = formValues;
        
        if (image ) {
          const a = await postProducts({ name, price, image, type }); 
          console.log(a) 
          console.log(image)
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
                                    name="image" 
                                    onChange={(e) => {
                                        handleImageChange(e);
                                        const file = e.target.files[0];
                                        const reader = new FileReader();
                                        console.log('reader', reader)
                                        const b = reader.readAsDataURL(file);
                                        console.log(b)
                                        reader.onload = () => {
                                            const imgPreview = document.getElementById("img-preview");
                                            imgPreview.src = reader.result;
                                            // console.log('see', see)
                                            imgPreview.style.display = "block";
                                        };
                                    }}
                                    
                                    ></input>
                                </label>
                            </div>
                            <div className="formAddProduct">
                            <img id="img-preview" src={formValues.image} alt="Preview de imagen" style={{ display: "block", maxWidth: "100%" }} />
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

