// shared/ui/Swiper.tsx
import React from 'react';
import 'swiper/css';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

interface SwiperProps {
  slides: React.ReactNode[];
  containerStyle?: string;
}

export default function Swiper({ slides, containerStyle }: SwiperProps) {
  return (
    <ReactSwiper
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
      }}
      className={twMerge('w-full h-full', containerStyle)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </ReactSwiper>
  );
}
