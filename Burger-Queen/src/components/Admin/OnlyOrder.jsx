import tacos from "../img/tacos.png"

const OnlyOrder = () => {
    return(
        <div className="dataOfOrder">
            <img width="20px" height="20px" src={tacos}></img>
            <p>Burger</p>
            <p>2</p>
        </div>
    )
};

export default OnlyOrder;