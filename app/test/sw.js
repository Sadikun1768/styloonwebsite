"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Swip() {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 height-full py-20 px-10'>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        className='w-[100%]'
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
          breakpoints={{
          
          0: {
            slidesPerView: 1,
          },
          
          768: {
            slidesPerView: 2,
          },
        
          1024: {
            slidesPerView: 3,
          },
        }}

      >
        <SwiperSlide>
          <Image
            src="/slide4.jpeg"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slide3.jpeg"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slide5.jpeg"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slide4.jpeg"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slide5.jpeg"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
