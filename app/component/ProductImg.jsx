"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Image from 'next/image';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        className='max-w-4xl mx-auto py-8'
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      // className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/two.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/three.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/four.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/five.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/five.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/five.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/five.webp"
            alt="Picture of dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='max-w-4xl mx-auto py-8'
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/one.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/one.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/one.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/two.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/three.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/four.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/five.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/five.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/five.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-2"
            src="/images/five.webp"
            alt="Picture of the author"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
