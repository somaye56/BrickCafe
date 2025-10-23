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

export default function SwiperZomorod() {
  const { data } = useMenu();

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
        className="swiper zomorodSwiper bg-[#3f9369] [border-radius:250px_250px_0_0/90px_90px_0_0]"
      >
        {categories.map((item: Category, i: number) => (
          <SwiperSlide className="flex flex-col items-center" key={i}>
            <div className=" grid items-center">
              <div
                className={`swiper-image-holder cursor-pointer ${i === activeIndex ? "active" : ""
                  } ${i === (activeIndex + 1) % categories.length ||
                    i === (activeIndex + 2) % categories.length
                    ? "raised-slide"
                    : ""
                  }`}
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
