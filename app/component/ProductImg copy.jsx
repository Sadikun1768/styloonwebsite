"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function ProductImg() {
    return (
     <div className='bg-white height-full px-2'>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className='max-w-4xl mx-auto py-8'
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
            slidesPerView: 1,
          },
        
          1024: {
            slidesPerView: 1,
          },
        }}

      >
        <SwiperSlide>
          <Image
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/one.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/two.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/three.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/four.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/five.webp"
            alt="Picture of the author"
            width={300}
            height={300}
            layout='responsive'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/six.webp"
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
