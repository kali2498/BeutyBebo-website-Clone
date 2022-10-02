import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import style from "../Pages/Home.module.css"

const makup_data = [
  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d3211068058664152346_1.jpg",
    id: 1,
    name: "Chicco Baby Moments Mild Bodywash Refresh",
    price: "₹431.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/7/974e43ebiode00000007-01.jpg",
    id: 2,
    name: "Bioderma Atoderm Huile De Douche 24h Hydration Ultra-Nourishing Anti-",
    price: "₹440.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/1/613f25a8904086380051_0.jpg",
    id: 3,
    name: "VEGA Natural Bristle Bath Brush (NBA-1/3)",
    price: "₹1,397.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/6/c65525avegax00000003_1.jpg",
    id: 4,
    name: "VEGA VHTH 16 Beard Trimmer",
    price: "₹1,256.00",
  },
];

function BeuetyPersonalCare() {
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

export default BeuetyPersonalCare;
