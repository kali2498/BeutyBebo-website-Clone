import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import style from "../Pages/Home.module.css"

const makup_data = [
  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/1/d1a028c8903380160383__7_.jpg",
    id: 1,
    name: "Faces Canada Ultime Pro Eye Shadow Palette - Rose 02",
    price: "₹899.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/0/d0e405d8903380002706_new_7.jpg",
    id: 2,
    name: "Faces Canada Ultime Pro Hd Finishing Touch Setting Powder",
    price: "₹719.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/a/2a5a8668903380002744__3_.jpg",
    id: 3,
    name: "Faces Canada Ultime Pro Hd Matte Brilliance Pressed Powder",
    price: "₹809.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/3/938ec248903380001310_1.jpg",
    id: 4,
    name: "Faces Canada Ultime Pro Blend Finity Stick Concealer",
    price: "₹674.00",
  },
];

function BeuetyMekup() {
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

export default BeuetyMekup;
