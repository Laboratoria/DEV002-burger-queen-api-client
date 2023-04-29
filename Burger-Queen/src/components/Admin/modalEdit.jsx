import exitIcon from "../img/exitIcon.png"
import { putProducts } from "../../request"; //importa la función para hacer la petición PUT
import { useState } from "react";

const ModalEdit = ({ children, estado, cambiarEstado, props }) => {

    let { id, name, price, image, type } = props;
     id = localStorage.getItem("productId");

    const [formValues, setFormValues] = useState({
        name: name || "",
        image: image || "",
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

    const editProduct = async (id, updatedProduct) => {
        try {
            const response = await putProducts(id, updatedProduct);
            console.log(response); // aquí puedo mostrar algo para confirmar al usuario su acción.
        } catch (error) {
            console.log(error);
        }
    }

    const editData = async (event) => {
        event.preventDefault();
        const { name, image } = formValues;

        if (image) {
            const updatedProduct = {
                name: name,
                price: price,
                image: image,
                type: type,
            };
            await editProduct(id, updatedProduct);
            cambiarEstado(false)
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
                                        value={formValues.name}
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
                                        onChange={handleImageChange}
                                    ></input>
                                </label>
                            </div>
                            <div className="formAddProduct">
                                <img id="img-preview" src={formValues.image} alt="" style={{ display: "block", maxWidth: "100%" }} />
                            </div>
                            <button type="submit" className="buttonAddModal">Actualizar producto</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
};







// import exitIcon from "../img/exitIcon.png"
// import { postProducts } from "../../request";
// import { useState } from "react";


// const ModalEdit = ({ children, estado, cambiarEstado, props }) => {

//     const { price, type } = props;

//     const [formValues, setFormValues] = useState({
//         name: "",
//         image: "",
//       });

//       const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormValues({ ...formValues, [name]: value });
//       };

//       const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => {
//           setFormValues({ ...formValues, image: reader.result });
//         };
//       };

//       const editData = async (event) => {
//         event.preventDefault();
//         const { name, image } = formValues;

//         if (image ) {
//           await postProducts({ name, price, image, type }); 
//         }
//       };

//     return (
//         <div>
//             {estado &&
//                 <div className="overlay">
//                     <div className="headOfModal">
//                         <p className="messageError">Texto de Error</p>
//                         <img onClick={() => cambiarEstado(false)} className="exitIcon" src={exitIcon} />
//                     </div>
//                     <div className="bodyOfModal">
//                         <form onSubmit={editData}>
//                             <div className="formAddProduct">
//                                 <label className='label-form'>
//                                     Nombre
//                                     <input 
//                                     type="text" 
//                                     placeholder="Nombre" 
//                                     className="inputModalProduct" 
//                                     name="name"
//                                     onChange={handleInputChange}
//                                     ></input>
//                                 </label>
//                             </div>
//                             {children}
//                             <div className="formAddProduct">
//                                 <label className='label-form'>
//                                     Imagen
//                                     <input 
//                                     type="file" 
//                                     id="inputImage" 
//                                     className="inputModalProduct" 
//                                     name="image" 
//                                     onChange={(e) => {
//                                         handleImageChange(e);
//                                         const file = e.target.files[0];
//                                         // console.log('file' , file)
//                                         const reader = new FileReader();
//                                         console.log('reader', reader)
//                                         reader.readAsDataURL(file);
//                                         // console.log('b', b)
//                                         reader.onload = () => {
//                                             const imgPreview = document.getElementById("img-preview");
//                                              const src = imgPreview.src = reader.result;
//                                             // console.log('src', src)
//                                             imgPreview.style.display = "block";
//                                         };
//                                     }}

//                                     ></input>
//                                 </label>
//                             </div>
//                             <div className="formAddProduct">
//                             <img id="img-preview" src={formValues.image} alt="" style={{ display: "none", maxWidth: "100%" }} />
//                             </div>

//                             <button type="submit" className="buttonAddModal">Añadir un nuevo producto</button>
//                         </form>
//                     </div>
//                 </div>
//             }
//         </div>
//     )
// };

export default ModalEdit;