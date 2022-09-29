import React from "react";
import { Image, Box } from "@chakra-ui/react";

export default function ImageNavbar() {
  return (
    <Box>
      <Image
        src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg"
        alt="navbarpatti"
        cursor="pointer"
        maxWidth="100rem"
        maxHeight="11rem"
        height={"4rem"}
      />
    </Box>
  );
}
