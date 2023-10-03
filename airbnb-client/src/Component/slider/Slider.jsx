// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import {categories} from './CategoryData'
import CategoryBox from "../Categories/CategoryBox";
console.log( categories)

const Slider = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",
          "--swiper-navigation-size": "14px",
          "--swiper-navigation-border-width": " 3px",
          "--swiper-navigation-border-style": " solid",
          "--swiper-navigation-border-color": "#000000",
          "--swiper-navigation-border-radius": " 50%",
          "--swiper-navigation-paddingRight": "100px",
        }}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={10}
        spaceBetween={6}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 30,
          },
          "@2.00": {
            slidesPerView: 9,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {
           categories.map(category=> <SwiperSlide key={category.label}>
               <CategoryBox label={category.label} icon={category.icon}></CategoryBox>
            </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default Slider;
