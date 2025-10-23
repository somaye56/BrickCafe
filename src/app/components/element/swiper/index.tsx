"use client";
import Image from "next/image";
import React, { useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AddIcon from "../../icons/AddIcon";
import BackIcon from "../../icons/BackIcon";
import NegativeIcon from "../../icons/NegativeIcon";
import { foods } from "./foods";
// @ts-ignore: side-effect CSS import has no type declarations in this TS config
import "./styles.css";
interface SwiperHomeProps {
  selectedCategory?: number | string | null;
}

const SwiperHome: React.FC<SwiperHomeProps> = ({ selectedCategory }) => {
  const defaultCategoryId = 25527;
  const [selectedItem, setSelectedItem] = useState<typeof foods[0] | null>(null);
  const [quantity, setQuantity] = useState(1);

  const activeCategory = selectedCategory ?? defaultCategoryId;

  const filteredImages = foods.filter(
    (img) => img.categoryId === activeCategory
  );

  return (
    <div className="relative py-[30px] flex  items-center ">
      <Swiper
        spaceBetween={2}
        centeredSlides={true}              
        breakpoints={{
          320: { slidesPerView: 1.5, centeredSlides: true },  
          480: { slidesPerView: 1.8, centeredSlides: true },
          640: { slidesPerView: 2.2, centeredSlides: true },
          1024: { slidesPerView: 2.4, centeredSlides: true },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        modules={[Pagination]}
        className="zomorodSwiper w-full"
        style={{
          "--swiper-pagination-bullet-size": "5px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          paddingBottom: "20px",
        } as React.CSSProperties}
      >
        {filteredImages.map((src, index) => (
          <SwiperSlide
            key={`${src.categoryId}-${index}`}
            className="zomorod-items flex justify-center mt-[40px]"
          >
            <div className="grid grid-cols-1 ">
              <div
                className="items__image  cursor-pointer flex justify-center "
                onClick={() => setSelectedItem(src)}
              >
                <Image
                  src={src.image}
                  alt={src.name}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-5 text-white font-bold flex flex-col items-center text-center gap-2">
                <div>{src.name}</div>
                <div> تومان {src.MainPrice} </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-end bg-black/60 backdrop-blur-sm h-full"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white w-full rounded-3xl h-full p-5 animate-slideUp overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end sticky top-0 bg-white z-50 pb-2">
              <button
                className="text-gray-500 hover:text-gray-800 text-2xl font-bold p-2 rounded-full"
                onClick={() => setSelectedItem(null)}
              >
                <BackIcon />
              </button>
            </div>

            <div className="popup-image mb-5 mx-auto w-64 h-64 rounded-full bg-[#49a979] flex items-center justify-center overflow-hidden">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="w-full flex gap-2 font-semibold">
                <div className="w-1/2 flex justify-start text-[#2c875a] text-[18px]">
                  {selectedItem.MainPrice} تومان
                </div>
                <div className="w-1/2 flex justify-end text-black text-[22px]">
                  {selectedItem.name}
                </div>
              </div>

              <div className="flex justify-end mb-4 text-black font-semibold">
                {selectedItem.description}
              </div>

              <div className="flex items-center justify-between bg-[#49a979] px-[30px] py-[8px] w-full h-[57px] rounded-3xl mt-[30px] mb-[30px] gap-4">
                <div className="flex justify-start gap-4 w-1/2">
                  <button
                    onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
                    className="text-white flex items-center justify-center"
                  >
                    <NegativeIcon />
                  </button>

                  <div className="text-white">{quantity}</div>

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-white flex items-center justify-center"
                  >
                    <AddIcon />
                  </button>
                </div>
                <div className="font-semibold text-xl flex justify-end text-nowrap">
                  یادداشت سفارش
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperHome;
