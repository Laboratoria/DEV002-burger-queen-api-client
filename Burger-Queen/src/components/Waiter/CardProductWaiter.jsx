import taco from "../img/tacos.png"

const CardProductWaiter = () => {
    return (
        <div id="iconOrderTaked" className="CardProductWaiter">
            <p>Taco</p>
            <img width={'40px'} src={taco}></img>
            <p>S/ 8</p>
        </div>
    )
};

export default CardProductWaiter;