import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import style from "../Pages/Home.module.css"

const makup_data = [
  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_2_1.jpg",
    id: 1,
    name: "Plum Bodylovin' Feelin' So Rose Body Mist",
    price: "₹398.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/5/55c1d29plumx00000130_5_1.jpg",
    id: 2,
    name: "KamaSutra Woman Enigma Perfume Body Spray - Pack Of 2",
    price: "₹457.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/6/266b211plumx00000054_1.jpg",
    id: 3,
    name: "Plum Bodylovin' Orchid You Not Body Mist",
    price: "₹473.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/1/8123211plumx00000053_1.jpg",
    id: 4,
    name: "Plum Bodylovin' Trippin' Mimosas Body Mist",
    price: "₹473.00",
  },
];

function BeuetyFragrance() {
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

export default BeuetyFragrance;
