import React, { useState, useEffect } from 'react';

import Card from "../components/card.jsx"
import axios from "axios";
  const token = localStorage.getItem("token");

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);

  const getData = async () => {
    const urlBurguerApi = "http://localhost:8080/products";
    await axios
      .get(urlBurguerApi, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const data = response.data;
        setCardsData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="grid-cards">
        {cardsData.map((product) => (
          <div key={product.id}>
            <Card name={product.name} image={product.image} price={product.price} type={product.type} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;