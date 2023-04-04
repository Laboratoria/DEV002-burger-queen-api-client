import exitIcon from "../img/exitIcon.png"

const AddModal = ({ children, estado, cambiarEstado }) => {
    return (
        <div>
            {estado &&
                <div className="overlay">
                    <div className="headOfModal">
                        <p className="messageError">Texto de Error</p>
                        <img onClick={() => cambiarEstado(false)} className="exitIcon" src={exitIcon} />
                    </div>
                    <div className="bodyOfModal">
                        <form>
                            <div className="formAddProduct">
                                <label className='label-form'>
                                    Nombre
                                    <input type="" placeholder="Nombre" className="inputModalProduct" name=""></input>
                                </label>
                            </div>
                            {children}
                            <div className="formAddProduct">
                                <label className='label-form'>
                                    Imagen
                                    <input type="file" id="inputImage" className="inputModalProduct" name="imagen" onChange={(e) => {
                                        const file = e.target.files[0];
                                        const reader = new FileReader();
                                        reader.readAsDataURL(file);
                                        reader.onload = () => {
                                            const imgPreview = document.getElementById("img-preview");
                                            imgPreview.src = reader.result;
                                            imgPreview.style.display = "block";
                                        };
                                    }}></input>
                                </label>
                            </div>
                            <div className="formAddProduct">
                                <img id="img-preview" style={{ display: "none", maxWidth: "20%", alignSelf: "center", marginBottom: "10px"  }} />
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
