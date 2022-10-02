import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import style from "./Home.module.css";
import BeuetyMekup from "../HomeTabs/BeuetyMekup";
import BeuetySkin from "../HomeTabs/BeuetySkin";
import BeuetyHair from "../HomeTabs/BeuetyHair";
import BeuetyPersonalCare from "../HomeTabs/personalCare";
import BeuetyEye from "../HomeTabs/BeuetyEye";
import BabyProduct from "../HomeTabs/MomProducts";
import BeuetyFragrance from "../HomeTabs/BeuetyFragrance";

export default function HomeTabs() {
  return (
    <>
      <Tabs isFitted variant="enclosed" className={style.homeTabs_Compoents1}>
        <TabList height={"7rem"}>
          <Tab fontSize="17px">
            <div>
              <img
                src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
                alt="1"
              />
              <Text mt={"0.8rem"} fontFamily={"serif"} textAlign={"center"}>
                makeup
              </Text>
            </div>
          </Tab>
          <Tab fontSize="17px">
            <div>
              <img
                src="https://www.beautybebo.com/pub/media/catalog/category/skin.png"
                alt="2"
              />
              <Text mt={"0.8rem"} fontFamily={"serif"}>
                Skin
              </Text>
            </div>
          </Tab>
          <Tab fontSize="17px">
            <div>
              <img
                src="https://www.beautybebo.com/pub/media/catalog/category/hair.png"
                alt="3"
              />
              <Text mt={"0.8rem"} fontFamily={"serif"}>
                hair
              </Text>
            </div>
          </Tab>
          <Tab fontSize="17px">
            <div>
              <img
                src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png"
                alt="4"
                className={style.textcenter}
              />
              <Text mt={"0.8rem"} fontFamily={"serif"}>
                Personal Care
              </Text>
            </div>
          </Tab>
          <Tab fontSize="17px">
            <div>
              <img
                src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png"
                alt="5"
                className={style.textcenter}
              />
              <Text mt={"0.8rem"} fontFamily={"serif"}>
                Mom & Baby Care
              </Text>
            </div>
          </Tab>
          <Tab fontSize="17px">
            <div>
              <img
                src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png"
                alt="6"
              />
              <Text mt={"0.8rem"} fontFamily={"serif"}>
                Eye
              </Text>
            </div>
          </Tab>
          <Tab fontSize="17px">
            <div>
              <img
                src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png"
                alt="7"
                className={style.textcenter}
              />
              <Text mt={"0.8rem"} fontFamily={"serif"}>
                Fragrance
              </Text>
            </div>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              <BeuetyMekup />
            </p>
          </TabPanel>

          <TabPanel>
            <p>
              <BeuetySkin />
            </p>
          </TabPanel>

          <TabPanel>
            <p>
              <BeuetyHair />
            </p>
          </TabPanel>

          <TabPanel>
            <p>
              <BeuetyPersonalCare />
            </p>
          </TabPanel>

          <TabPanel>
            <p>
              <BabyProduct />
            </p>
          </TabPanel>

          <TabPanel>
            <p>
              <BeuetyEye />
            </p>
          </TabPanel>

          <TabPanel>
            <p>
              <BeuetyFragrance />
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
