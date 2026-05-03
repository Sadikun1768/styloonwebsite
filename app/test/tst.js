// ata modal er ccode
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={10} loop={true}>
        {["/images/one.webp","/images/two.webp","/images/three.webp"].map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Product ${i}`}
              width={300}
              height={300}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => {
                setSelectedImg(img);
                setIsOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              ✕
            </button>
            <Image
              src={selectedImg}
              alt="Large view"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}


Step-by-step Modal Integration
State তৈরি করুন

js
const [isOpen, setIsOpen] = useState(false);
const [selectedImg, setSelectedImg] = useState(null);
Image এ click করলে modal খুলবে

jsx
<Image
  src="/images/one.webp"
  alt="Product"
  width={300}
  height={300}
  className="cursor-pointer transition-transform duration-300 hover:scale-110"
  onClick={() => {
    setSelectedImg("/images/one.webp");
    setIsOpen(true);
  }}
/>
Modal Component বানান

jsx
{isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg">
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 text-black font-bold text-xl"
      >
        ✕
      </button>

      {/* Large Image */}
      <Image
        src={selectedImg}
        alt="Large view"
        width={600}
        height={600}
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
)}
🎨 Full Demo (Swiper + Modal)
jsx
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={10} loop={true}>
        {["/images/one.webp","/images/two.webp","/images/three.webp"].map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Product ${i}`}
              width={300}
              height={300}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => {
                setSelectedImg(img);
                setIsOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              ✕
            </button>
            <Image
              src={selectedImg}
              alt="Large view"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}


          