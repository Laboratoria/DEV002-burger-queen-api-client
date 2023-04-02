import exitIcon from "../img/exitIcon.png"

const AddModal = () => {
    return (
        <div>
            <div className="overlay">
                <div className="headOfModal">
                    <p className="messageError">Texto de Error</p>
                    <img className="exitIcon" src={exitIcon}/>
                </div>
                <div className="bodyOfModal">
                    <form>
                        <div className="formAddProduct">
                            <label className='label-form'>
                                Nombre
                                <input type="" placeholder="Nombre" className="inputModalProduct" name=""></input>
                            </label>
                        </div>
                        <div className="formAddProduct">
                            <label className='label-form'>
                                Precio
                                <input type="" placeholder="Precio" className="inputModalProduct" name=""></input>
                            </label>
                        </div>
                        <div className="formAddProduct">
                            <label className='label-form'>
                                Categoría
                                <button className="buttonsOfCategory">Desayuno</button>
                                <button className="buttonsOfCategory">Almuerzo</button>
                            </label>
                        </div>
                        <div className="formAddProduct">
                            <label className='label-form'>
                                Imagen
                                <input type="" placeholder="Imagen" className="inputModalProduct" name=""></input>
                            </label>
                        </div>
                        <button type="submit" className="buttonAddModal">Añadir un nuevo producto</button>
                    </form>

                </div>
            </div>

        </div>

    )


}

export default AddModal;
