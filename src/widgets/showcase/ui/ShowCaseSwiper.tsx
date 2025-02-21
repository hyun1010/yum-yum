import SwiperData from '@/src/features/swiperData/ui/SwiperData';
import React from 'react';
import { ItemsResponse } from '../types/swiper';
import Image from 'next/image';

export default function ShowCaseSwiper() {
  return (
    <SwiperData<ItemsResponse>
      dataUrl="/PhotoGalleryService1/galleryList1"
      dataParams={{
        numOfRows: 4,
        pageNo: 18,
        arrange: 'A',
      }}
      slideComponent={(item) => (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            fill
            src={item.galWebImageUrl}
            alt={item.galTitle}
            className="object-cover"
          />
        </div>
      )}
    />
  );
}
