import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
// <link
// rel="stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
// integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
// crossorigin="anonymous"
// referrerpolicy="no-referrer"
// />

export default function Profile() {
  return (
    <Flex>
      <Tabs variant="soft-rounded" colorScheme="pink">
        <TabList
          w={"100rem"}
          border={"1px solid"}
          pr={"13rem"}
          justifyContent={"center"}
          bg={"#dd0285"}
          // gap="1rem"
        >
          <Tab color={"#FFF5F7"}>MAKEUP</Tab>
          <Tab color={"#FFF5F7"}>SKIN</Tab>
          <Tab color={"#FFF5F7"}>HAIR</Tab>
          <Tab color={"#FFF5F7"}>PERSONAL CARE</Tab>
          <Tab color={"#FFF5F7"}>MOM & BABY CARE</Tab>
          <Tab color={"#FFF5F7"}>FRAGRANCE</Tab>
          <Tab color={"#FFF5F7"}>AYURVEDA</Tab>
          <Tab color={"#FFF5F7"}>BRANDS</Tab>
          <TabList ml={"11rem"}>
            <Tab color={"#FFF5F7"}> MY CART</Tab>
          </TabList>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
