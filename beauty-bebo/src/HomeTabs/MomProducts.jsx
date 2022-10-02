import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import style from "../Pages/Home.module.css"

const makup_data = [
  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be80db28058664152490_1.jpg",
    id: 1,
    name: "Chicco Baby Moments Rich Cream",
    price: "₹394.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/0/8/088a1068058664152308_1.jpg",
    id: 2,
    name: "Chicco Baby Moments Mild Bodywash Protect",
    price: "₹411.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/4/443d5b28058664152391-1.jpg",
    id: 3,
    name: "Chicco Body Lotion",
    price: "₹470.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/c/dc91b1e8058664152254_1.jpg",
    id: 4,
    name: "Chicco Gentle Body Wash And Shampoo - 500ml",
    price: "₹470.00",
  },
];

function BabyProduct() {
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

export default BabyProduct;
