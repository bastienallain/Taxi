"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/berline-paris-1.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/passat-noir.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/van-paris-1.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
