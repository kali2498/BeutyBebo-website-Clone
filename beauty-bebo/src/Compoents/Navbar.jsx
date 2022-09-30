import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";

import style from "./navbarBottomSelect.css";

// <link
// rel="stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
// integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
// crossorigin="anonymous"
// referrerpolicy="no-referrer"
// />

export default function Navbar() {
  return (
    <Box className={style.selectTag} bg={"white"}>
      <Flex
        maxWidth={"100%"}
        m={"auto"}
        maxHeight="8rem"
        minH={"5rem"}
        pt="0.5rem"
        pl={"2rem"}
        pr={"3rem"}
        // border={"2px solid red"}
        justify="space-between"
      >
        <Flex
          width={"88%"}
          flexDirection="row"
          alignItems="center"
          // border={"2px solid black"}
          justifyContent="space-evenly"
          mb={"0.4rem"}
          // margin="auto"
        >
          <Image
            src={
              "https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
            }
            cursor="pointer"
            maxWidth="15rem"
            maxHeight="13rem"
            height={"4rem"}
            alt="Logo"
            // bgColor="#318FFB"
          ></Image>

          <Flex
            bgColor="white"
            // border= "1px solid lightgray"
            alignItems="center"
            gap="1px"
            ml={"2rem"}
            color={"RGBA(0, 0, 0, 0.36)"}
          >
            <Select
              placeholder="All Categories"
              maxWidth={"11rem"}
              fontSize={"15px"}
              border={"1px"}
              font-Size={"0.8rem"}
            >
              {/* <option value="option1">All Categories</option> */}
              <option value="option1">--Make up</option>
              <option value="option2"> ----Face</option>
              <option value="option3">------Foundation</option>
              <option value="option3">------Blush</option>
              <option value="option3">------Highlighter</option>
              <option value="option3">------Concealer</option>
              <option value="option3">------Compact & Powder</option>
              <option value="option3">------Face Primer</option>
              <option value="option3">------Makeup Remover</option>
              <option value="option3">------Bronzer</option>
              <option value="option3">------BB Cream</option>
              <option value="option3">------Loose Powder</option>
              <option value="option3">------Makeup Remover</option>
              <option value="option3">------Setiig Spray</option>
              <option value="option3">------Makeup Kit</option>
              <option value="option3">------CC Cream</option>
            </Select>
            <Input
              placeholder="Search By Keyword"
              width={"25rem"}
              // border="1px solid"
              color={"lightgray"}
              fontSize={"0.8rem"}
              //  onChange={(e)=>setSearchValue(e.target.value)}
            />
            <IconButton
              bg="#dd0285"
              aria-label="Search database"
              color={"white"}
              fontSize="1.5rem"
              borderRadius={"0"}
              //   onClick={()=>Search()}
            />
          </Flex>
        </Flex>

        <Box>
          <Flex
            marginTop="1.6rem"
            border={"1px solid blue"}
            w={"10rem"}
            pl={"2rem"}
            mt={'1rem'}
          >
            <Text paddingTop="0.3rem" pl={"2rem"}>
              Add Account
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
