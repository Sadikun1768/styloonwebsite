"use client";

import { Button, Modal } from 'antd';



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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };
 const handaleCancel = () => {
  setIsModalOpen(false);
  setSelectedImage(null);
 }
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
        <SwiperSlide key="1">
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
           onClick={() => showModal("/images/one.webp")}

          />
        </SwiperSlide>
        <SwiperSlide key="2">
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
            onClick={() => showModal("/images/one.webp")}
          />
        </SwiperSlide>
        <SwiperSlide key="3">
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
            onClick={() => showModal("/images/one.webp")}
          />
        </SwiperSlide>
        <SwiperSlide key="4">
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/two.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
            onClick={() => showModal("/images/two.webp")}
          />
        </SwiperSlide>
        <SwiperSlide key="5">
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/three.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
            onClick={() => showModal("/images/three.webp")}
          />
        </SwiperSlide>
        <SwiperSlide key="6">
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/four.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
            onClick={() => showModal("/images/four.webp")}
          />
        </SwiperSlide>
        <SwiperSlide key="7">
          <Image
            className='cursor-pointer transition-transform duration-300 hover:scale-150'
            src="/images/five.webp"
            alt="Picture of the dress"
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
            onClick={() => showModal("/images/five.webp")}
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
            onClick={() => showModal("/images/five.webp")}
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
            onClick={() => showModal("/images/five.webp")}
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
            onClick={() => showModal("/images/five.webp")}
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
        {/* Modal */}
       {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title=""
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        // onOk={handleOk}
        width="60%"
        centered
        onCancel={handaleCancel}
      >
        <Image
            className="w-full h-auto"
            src={selectedImage}
            alt="Picture of dress"
             width={700}
             height={600}  
          />
      </Modal>
    </>
  );
}
