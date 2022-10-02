import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import style from "../Pages/Home.module.css"

const makup_data = [
  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/1/d1a028c8903380160383__7_.jpg",
    id: 1,
    name: "Faces Canada Ultime Pro Eye Shadow Palette - Rose 02r",
    price: "₹899.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/5/55f3c248903380007626a_1.jpg",
    id: 2,
    name: "Faces Canada Ultime Pro Starry Eyes The Ultimate 18 Eyeshadow",
    price: "₹1,234.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/1448c8f8903380159455_2.jpg",
    id: 3,
    name: "Faces Canada Ultime Pro Eyebrow Defining Pencil - 01 Tan",
    price: "₹449.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/a/ca23621faces00000157_new_1.jpg",
    id: 4,
    name: "Faces Canada Ultime Pro Glitter Eyeliner",
    price: "₹636.00",
  },
];

function BeuetyEye() {
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

export default BeuetyEye;
