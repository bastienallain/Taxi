"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

// Initialize images
const images = [
  "/berline-paris-1.webp",
  "/passat-noir.webp",
  "/van-paris-1.webp",
];

export default function SliderHome() {
  return (
    <div className="relative w-full h-[300px] md:h-[500px]">
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
        className="w-full h-full"
      >
        {images.map((imageSrc, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex justify-center items-center"
          >
            <img
              className="w-full h-full"
              src={imageSrc}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
