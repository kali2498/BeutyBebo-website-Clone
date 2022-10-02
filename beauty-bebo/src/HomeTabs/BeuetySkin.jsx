import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import style from "../Pages/Home.module.css";

const makup_data = [
  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/a/2ae2c248903380003321a_1.jpg",
    id: 1,
    name: "Faces Canada Tan Be Gone De Tan Skin Brightening Clay Mask",
    price: "₹404.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/5/c543c248903380001488a.jpg",
    id: 2,
    name: "Faces Canada Urban Balance Daily Scrub Cleanser",
    price: "₹505.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/e/3ec9ca0biode00000020_1.jpg",
    id: 3,
    name: "Bioderma Photoderm Spot Age SPF 50+ Reduces Spots And Wrinkles Antioxidant",
    price: "₹1553.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/1/61b0ca0biode00000046_1.jpg",
    id: 4,
    name: "Bioderma Atoderm Intensive Gel Creme For Anti-Itching, Lipid-Replenishing",
    price: "₹818.00",
  },
];

function BeuetySkin() {
  return (
    <div>
      <div className={style.beutymakup_hometab}>
        {makup_data.map((el) => {
          return (
            <div className={style.homeTabs_Compoents_2}>
              <img src={el.url} />
              <h3> {el.name}</h3>
              <h4>
                <span className={style.pricetag}>Price :</span>
                <span className={style.pricenumber}> {el.price}</span>{" "}
              </h4>
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

export default BeuetySkin;
