"use client";

import { useMenu } from "@/app/hook/useMenu";
import { useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

import Image from "next/image";
import SwiperHome from "../swiper";

import "swiper/css";
import "swiper/css/pagination";
interface Category {
  id: string | number;
  category: string;
  icon: string;
}
// @ts-ignore: side-effect CSS import has no type declarations in this TS config
import "./styles.css";

export default function SwiperZomorod() {
  const { data } = useMenu();
  // const categories: Category[] = [
  //   {
  //     category: "پیتزا",
  //     icon: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
  //     id: 1
  //   },
  //   {
  //     category: "برگر",
  //     icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  //     id: 2
  //   },
  //   {
  //     category: "پاستا",
  //     icon: "https://cdn-icons-png.flaticon.com/512/599/599995.png",
  //     id: 3
  //   },
  //   {
  //     category: "نوشیدنی",
  //     icon: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  //     id: 4
  //   },
  //   {
  //     category: "دسر",
  //     icon: "https://cdn-icons-png.flaticon.com/512/590/590836.png",
  //     id: 5
  //   },
  //   {
  //     category: "ساندویچ",
  //     icon: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png",
  //     id: 6
  //   },
  //   {
  //     category: "سالاد",
  //     icon: "https://cdn-icons-png.flaticon.com/512/1046/1046782.png",
  //     id: 7
  //   },
  //   {
  //     category: "پیش‌غذا",
  //     icon: "https://cdn-icons-png.flaticon.com/512/1046/1046781.png",
  //     id: 8
  //   },
  // ];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const categories = Array.isArray(data?.categories) ? data.categories : [];
  const selectedCategoryId = categories[activeIndex]?.id;

  return (
    <>

      <SwiperComponent
        modules={[Pagination]}
        slidesPerView={4}
        centeredSlides={false}
        loop={false}
        speed={600}
        spaceBetween={8}
        breakpoints={{
          320: { slidesPerView: 4, spaceBetween: 8 },
          390: { slidesPerView: 4, spaceBetween: 8 },
          480: { slidesPerView: 4, spaceBetween: 10 },
          640: { slidesPerView: 4, spaceBetween: 12 },
          1024: { slidesPerView: 4, spaceBetween: 12 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper zomorodSwiper bg-[#3f9369] [border-radius:250px_250px_0_0/90px_90px_0_0] swiper-initialized swiper-horizontal swiper-pointer-events"
      >
        {categories.map((item: Category, i: number) => (
          <SwiperSlide className="flex flex-col items-center p-1" key={i}>
            <div className="grid grid-cols-1 items-center justify-items-center  text-nowrap">
              <div
                className={`swiper-image-holder cursor-pointer 
                  ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              >

                <Image
                  src={item.icon}
                  alt={item.category}
                  width={20}
                  height={20}
                  className="w-4"
                />
              </div>
              <span className="font-bold text-white text-center ">{item.category}</span>
            </div>
          </SwiperSlide>

        ))}
      </SwiperComponent>

      <div className="min-h-screen bg-bg-LimeGreen  [border-radius:250px_250px_0_0/90px_90px_0_0] mx-auto w-full">
        <div className="  w-full ">
          <div className=" w-full mx-auto  text-white relative min-h-screen">
            <SwiperHome selectedCategory={selectedCategoryId} />
          </div>
        </div>
      </div>
    </>
  );
}
