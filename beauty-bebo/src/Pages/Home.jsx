import React from "react";
import { Box, Button, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import style from "./Home.module.css";
import SimpleImageSlider from "react-simple-image-slider";
export default function home_data() {


const images = [
  {
    url: "https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
  },
  {
    url: "https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg",
  },
  {
    url: "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg",
  },
];

const beuty_data = [
  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/a/7a88ca0biode00000063_1.jpg",
    id: 1,
    name: "Faces Canada Urban Balance Daily Scrub Cleanser",
    price: "₹500.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e5ae6518903380019377_8.jpg",
    id: 2,
    name: "Faces Canada 3 In 1 All Day Hydra Matte Foundation (25ml)",
    price: "₹511.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/1/3112811faces00000223_10.jpg",
    id: 3,
    name: "CFaces Canada Comfy Matte Lip Color",
    price: "₹800.00",
  },

  {
    url: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/7/974e43ebiode00000007-01.jpg",
    id: 4,
    name: "Chicco Baby Moments Rich Cream(200ml)",
    price: "₹1,256.00",
  },
];

export default function Home() {
  return (
    <>
      <div>
        <SimpleImageSlider
          width={"81rem"}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>

      <div>
        <Box className={style.Compoent_2}>
          <Image
            src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"
            alt="Dan Abramov"
          />
        </Box>
      </div>

      <div className={style.head}>
        <h1>NEW ARRIVALS!</h1>
      </div>

      <div className={style.compoent_3}>
        {beuty_data.map((el) => {
          return (
            <>
              <div>
                <img src={el.url} />
                <h3> {el.name}</h3>
                <h4>Price : {el.price}</h4>
                <Button colorScheme="teal" variant="outline">
                  Button
                </Button>
              </div>
            </>
          );
        })}
      </div>

      <Flex className={style.Compoent_4}>
        <Box p="4">
          <img
            src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif"
            alt="discount"
          />
        </Box>
        <Spacer />
        <Box p="4">
          <img
            src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif"
            alt="discount2"
          />
        </Box>
      </Flex>

 


    </>
  );
}
