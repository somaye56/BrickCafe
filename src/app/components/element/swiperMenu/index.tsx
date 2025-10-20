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
    <div className="zomorod__wrapper ">
      <div className="">
        <SwiperComponent
          modules={[Pagination]}
          centeredSlides={true}
          loop={true}
          speed={600}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="swiper zomorodSwiper  bg-[#3f9369] [border-radius:250px_250px_0_0/90px_90px_0_0] w-full "
        >
          {categories.map((item: Category, i: number) => (
            <SwiperSlide key={i}>
              <div className=" grid grid-cols-1 justify-center  ">
                <div
                  className={`swiper-image-holder cursor-pointer ${i === activeIndex ? "active" : ""
                    }`}
                  onClick={() => setActiveIndex(i)}
                 
                >
                  <Image
                    src={item.icon}
                    alt={item.category}
                    width={50}
                    height={50}
                    className=""
                  />
                </div>
                <span className=" font-bold text-white">{item.category}</span>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
      <div className="min-h-screen bg-bg-LimeGreen  [border-radius:250px_250px_0_0/90px_90px_0_0] mx-auto w-full">
        <div className="  w-full ">
          <div className=" w-full mx-auto  text-white relative min-h-screen">
            <SwiperHome selectedCategory={selectedCategoryId} />
          </div>
        </div>
      </div>
    </div>



  );
}
