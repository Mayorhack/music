import React from "react";
import { motion } from "framer-motion";
import Searchbar from "../components/Searchbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import image from "../assets/1.png";
import ShadowCard from "../components/ShadowCard";
import Card from "../components/Card";

const Collections = () => {
  return (
    <motion.div
      className="collections"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Searchbar />
      <Tabs>
        <TabList className={"collection_tabs"}>
          <Tab selectedClassName="active_tab" className={"collection_tab"}>
            <ShadowCard children={<p>My collection</p>} />
          </Tab>
          <Tab selectedClassName="active_tab" className={"collection_tab"}>
            <ShadowCard children={<p>Likes</p>} />
          </Tab>
        </TabList>

        <TabPanel>
          <Card
            children={
              <>
                <img src={image} alt="" />
                <div className="textss">
                  <h4>Limits</h4>
                  <p>John watts</p>
                  <p className="likes">230 likes</p>
                </div>
                <svg
                  width="61"
                  height="62"
                  viewBox="0 0 61 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_6362_172)">
                    <rect
                      x="18"
                      y="18"
                      width="25"
                      height="25.5453"
                      rx="12.5"
                      fill="#FACD66"
                      shape-rendering="crispEdges"
                    />
                    <path
                      d="M26.3333 30.7727V28.9537C26.3333 26.6193 27.9856 25.6643 30.0017 26.8315L31.5781 27.741L33.1546 28.6505C35.1707 29.8177 35.1707 31.7277 33.1546 32.8949L31.5781 33.8044L30.0017 34.7138C27.9856 35.881 26.3333 34.9261 26.3333 32.5917V30.7727Z"
                      fill="#EFEEE0"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6362_172"
                      x="0"
                      y="0"
                      width="61"
                      height="61.5453"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="9" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6362_172"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6362_172"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </>
            }
          />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </motion.div>
  );
};

export default Collections;