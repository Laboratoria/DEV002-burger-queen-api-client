import React, { useState, useEffect } from 'react';

import Card from "../components/card.jsx"
import axios from "axios";

const Cards = () => {
  const token = localStorage.getItem("token");
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


// const Cards = () => {
//     const token = localStorage.getItem("token");
//     const [cardsData, setCardsData] = useState([]);
  
//     const getData = async () => {
//       const urlBurguerApi = "http://localhost:8080/products";
//       await axios
//         .get(urlBurguerApi, {
//           headers: {
//             Authorization: "Bearer " + token, //the token is a variable which holds the token
//           },
//         })
//         .then((response) => {
//           const data = response.data;
//           setCardsData(data);
//         });
//     };
  
//     useEffect(() => {
//       getData();
//     }, []);
  
//     return (
//       <div>
//         <div className="grid-cards">
//           {cardsData.map((card) => (
//             <div key={card.id}>
//               <Card />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  


// const Cards = () => {
//     const token = localStorage.getItem("token");
//     const getData = async () => {

//         const urlBurguerApi = "http://localhost:8080/products";

//         await axios.get(urlBurguerApi, {
//             headers: {
//                 Authorization: 'Bearer ' + token //the token is a variable which holds the token
//             }
//         })
//             .then((response) => {
//                 const data = response.data;
//                 console.log(data);
//             });
//     };

//     getData();
//     return (
//         <div>
//             <div className="grid-cards">
//                 {/* <Card tittle='titulo' /> */}
//                 {
//                     card.map(card => (
//                         <div key={card.name}>
//                         <Card tittle={card.name} />    
//                         </div>
//                     ))
//                 }

//             </div>
//         </div>
//     )
// }
export default Cards;