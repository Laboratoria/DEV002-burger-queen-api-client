import React from "react";
import Card from "../components/card.jsx"

const cards = [
    {
        "id": 1,
        "name": "Sandwich de jamón y queso",
        "price": 1000,
        "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/sandwich.png",
        "type": "Desayuno",
        "dateEntry": "2022-03-05 15:14:10"
    },
    {
        "id": 2,
        "name": "Café americano",
        "price": 500,
        "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/coffee.png",
        "type": "Desayuno",
        "dateEntry": "2022-03-05 15:14:10"
    },
    {
        "id": 3,
        "name": "Agua 500ml",
        "price": 500,
        "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/water.png",
        "type": "Almuerzo",
        "dateEntry": "2022-03-05 15:14:10"
    }
]

const Cards = () => {
    return (
        <div>
            <div className="grid-cards">

                {
                    cards.map(card => (
                        <div key={card.name}>
                        <Card tittle={card.name} />    
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default Cards;