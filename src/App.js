import React, { useState } from "react";
import cl from "./Courusel.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "./style.css";

const App = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const slideTo = (swipeI) => {
    if (swipeI > 3) {
      swiper.slideTo(1)
    } else if (swipeI < 1) {
      swiper.slideTo(3)
    } else {
      swiper.slideTo(swipeI)
    };
  }


  const gradient = "linear-gradient(45deg, gold, rgb(255, 0, 247))";
  const styleForList = [
    { background: slideIndex === 0 ? gradient : "white" },
    { background: slideIndex === 1 ? gradient : "white" },
    { background: slideIndex === 2 ? gradient : "white" }
  ]

  let mainContent = [
    { id: 0, tittle: `Tittle to be 1`, paragraph: `Paragraph 1`, comment: `Little discription:` },
    { id: 1, tittle: `Tittle to be 2`, paragraph: `Paragraph 2`, comment: `Little discription:` },
    { id: 2, tittle: `Tittle to be 3`, paragraph: `Paragraph 3`, comment: `Little discription:` },

  ]
  let toRenderData = mainContent.map((data) => (
    <SwiperSlide key={data.id}>
      <div className={cl.mainpart}>
        <div className={cl.tittle}> {data.tittle}</div>
        <div className={cl.paragraph}> {data.paragraph} </div>
        <div className={cl.comment}> {data.comment}</div>
      </div></SwiperSlide>

  ));
  let toRenderDatanr = mainContent.map((data) => (
    <div className={cl.nrr} >
      <div className={cl.tittle1}> {data.tittle}</div>
      <div className={cl.paragraph1}> {data.paragraph} </div>
      <div className={cl.comment1}> {data.comment}</div>
    </div>
  ));
  return (
    <div className={cl.container}>
      <div className={cl.courusel}>
        <div className={cl.c_item}>



          <Swiper
            onSwiper={setSwiper}
            id="main"
            loop={true}
            onSlideChange={(swiper) => { setSlideIndex(swiper.activeIndex - 1) }}

            >
            {toRenderData}
          </Swiper>
          <div className={cl.scroll_list}>
            <span
              className={cl.scroll_left}
              onClick={() => {
                slideTo(swiper.activeIndex - 1);
              }}
            > {" < "}
            </span>
            <div className={cl.dot} style={styleForList[0]} onClick={() => { slideTo(1) }}></div>
            <span className={cl.dot} style={styleForList[1]} onClick={() => { slideTo(2) }}></span>
            <span className={cl.dot} style={styleForList[2]} onClick={() => { slideTo(3) }}></span>
            <span
              className={cl.scroll_right}
              onClick={() => {
                slideTo(swiper.activeIndex + 1);
              }}
            > {" > "}
            </span>
          </div>

          <div className={cl.nr}>
            {toRenderDatanr}
          </div>



        </div>
      </div>


    </div>
  );
};

export default App;
