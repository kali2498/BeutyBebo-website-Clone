import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import style from "./Home.module.css";

const data_image = [
  "https://mcdnnew.ellementry.com/media//resize/2400/500/magestore/bannerslider/images/new-size-terracotta.png.webp",
 
];


export default function Home() {
  return (
    <>
     <div>
     {
      data_image.map((el)=> {
        return(
          <>
            <img src = {el}/>
          </>
        )
      })
     }
     
     </div>

   
    </>
  );
}
