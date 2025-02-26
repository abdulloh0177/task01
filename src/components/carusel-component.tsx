"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import CaruselImage from "@/assets/carusel-image1.png"
const CaruselComponent = () => {
  return (
    <>
      <Swiper
        autoplay={true}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper mt-[32px] mb-[32px] border border-gray-300  rounded-lg "
      >
        <SwiperSlide>
          <Image
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] max-[470px]:h-[160px]"
            src={CaruselImage}
            alt="carusel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] max-[470px]:h-[160px]"
            src={CaruselImage}
            alt="carusel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] max-[470px]:h-[160px]"
            src={CaruselImage}
            alt="carusel-image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CaruselComponent;
