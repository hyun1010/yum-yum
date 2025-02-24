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
      containerStyle="w-full overflow-hidden bg-[#FFEFE1] h-[calc(100vh-100px)]"
      slideComponent={(item) => (
        <div className="w-full h-full flex items-center justify-center gap-8 pt-[90px] px-4 md:px-[50px] lg:px-[200px]">
          <div className="w-full md:w-[500px] h-fit">
            <div>{item.galSearchKeyword}</div>
            <h1 className="w-full truncate text-center md:text-left">
              {item.galTitle}
            </h1>
          </div>
          <div className="relative grow h-[calc(100%-80px)] rounded-md overflow-hidden">
            <Image
              fill
              quality={100}
              src={item.galWebImageUrl}
              alt={item.galTitle}
              className="object-cover"
            />
          </div>
        </div>
      )}
    />
  );
}
