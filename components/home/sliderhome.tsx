"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
const images = [
  "/berline-paris-1.webp",
  "/passat-noir.webp",
  "/van-paris-1.webp",
];

export default function SliderHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade]}
      >
        {images.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <img src={imageSrc} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
