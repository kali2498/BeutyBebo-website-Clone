import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import style from "../Pages/Home.module.css"

const makup_data = [
  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/6/f658864trese00000061_1.jpg",
    id: 1,
    name: "Tresemme Pro Pure Damage Recovery Shampoo & Mask Combo",
    price: "₹1,116.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/f/9f5a0dd8901248154192_1.jpg",
    id: 2,
    name: "Boroplus Aloe Vera Gel With Green Tea",
    price: "₹360.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/3/93d343en_3401344957253-01.jpg",
    id: 3,
    name: "Bioderma Node DS+ Shampooing Anti-Dandruff Intense Shampoo",
    price: "₹1,527.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/9/e9c4ccctrese00000051_1.jpg",
    id: 4,
    name: "Tresemme Propure Moisture Boost - Shampoo + Mask + Serum Combo",
    price: "₹1,488.00",
  },
];

function BeuetyHair() {
  return (
    <div>
      <div className={style.beutymakup_hometab}>
        {makup_data.map((el) => {
          return (
            <div className={style.homeTabs_Compoents_2}>
              <img src={el.url} />
              <h3> {el.name}</h3>
              <h4><span className={style.pricetag}>Price :</span><span className={style.pricenumber}> {el.price}</span>  </h4>
              <Button colorScheme="teal" variant="outline">
                Button
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BeuetyHair;
