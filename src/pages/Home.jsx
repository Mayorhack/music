import React from "react";
import bgimage from "../assets/Vector.png";
import Searchbar from "../components/Searchbar";
import { motion } from "framer-motion";
import Card from "../components/Card";
import ShadowCard from "../components/ShadowCard";
import { MdFavorite } from "react-icons/md";
import bgImage from "../assets/bgimage.png";
import { imagedata, musicdata, songdata } from "../data/home";
import human from "../assets/human.png";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Searchbar />
      <header>
        <Card
          style={{ backgroundImage: `url(${bgimage})` }}
          children={
            <>
              <div className="card_flex">
                <div className="card_text">
                  <p className="light">Currated playlist</p>
                  <div className="">
                    <h1>R & B Hits</h1>
                    <p>
                      All mine, Lie again, Petty call me everyday, Out of time,
                      No love, Bad habit, and so much more
                    </p>
                  </div>

                  <div className="card_bottom">
                    <div className="bottomimages">
                      {imagedata.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ ease: "easeOut", delay: item.id * 0.4 }}
                        >
                          <img src={item.logo} alt="" />
                        </motion.div>
                      ))}
                    </div>
                    <MdFavorite />
                    <span>33k Likes</span>
                  </div>
                </div>
                <motion.img
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.8 }}
                  src={human}
                  alt=""
                />
              </div>
            </>
          }
        />
        <div className="charts">
          <h1>Top Charts</h1>
          <div className="slider">
            <div className="charts_slides">
              {songdata.map((item) => (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.6,
                    delay: 0.6 * item.id,
                  }}
                  key={item.id}
                >
                  <ShadowCard
                    children={
                      <>
                        <div className="grid">
                          <img src={item.logo} alt="" />
                          <Link
                            to={"/album"}
                            state={{
                              title: item.title,
                              logo: item.logo,
                              bg: bgImage,
                            }}
                          >
                            <p className="song_title">{item.title}</p>
                          </Link>
                          <p className="song_artist">{item.artist}</p>
                          <p className="song_length">{item.length}</p>
                        </div>
                        <div className="fav">
                          <motion.svg
                            whileTap={{ scale: 0.8, fill: "#facd66" }}
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z"
                              stroke="#FACD66"
                              stroke-width="0.5625"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M11 4.02501C11.8025 4.28451 12.3695 5.00076 12.4377 5.84151"
                              stroke="#FACD66"
                              stroke-width="0.5625"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </motion.svg>
                        </div>
                      </>
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </motion.div>
  );
};
const MusicSection = ({ title }) => {
  return (
    <div className="music_section">
      <h1>{title}</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={6.3}
        breakpoints={{
          300: { slidesPerView: 2.3 },
          400: { slidesPerView: 2.6 },
          500: { slidesPerView: 4.2 },
          800: { slidesPerView: 6.3 },
        }}
      >
        {musicdata.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              children={
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 * item.id }}
                  viewport={{ once: true }}
                >
                  <img src={item.logo} alt="" />
                  <p>{item.title}</p>
                </motion.div>
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Header />
      <MusicSection title={"New Release"} />
      <MusicSection title="Latest" />
    </div>
  );
};

export default Home;
