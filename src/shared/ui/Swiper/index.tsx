// shared/ui/Swiper.tsx
import React from 'react';
import 'swiper/css';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

interface SwiperProps {
  slides: React.ReactNode[];
}

export default function Swiper({ slides }: SwiperProps) {
  return (
    <ReactSwiper
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
      }}
      className="w-full h-full rounded-2xl"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </ReactSwiper>
  );
}
