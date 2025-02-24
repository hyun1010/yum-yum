import { useGetData } from '@/src/shared/service';
import { Swiper } from '@/src/shared/ui';
import React from 'react';

interface SwiperDataProps<T> {
  dataUrl: string;
  dataParams?: object;
  containerStyle?: string;
  slideComponent: (item: T, index: number) => React.ReactElement;
}

export default function SwiperData<T>({
  dataUrl,
  dataParams,
  containerStyle,
  slideComponent,
}: SwiperDataProps<T>) {
  const { data, isPending, error } = useGetData<T[]>(dataUrl, dataParams);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Swiper
      containerStyle={containerStyle}
      slides={(data || [])?.map((item, index) => (
        <React.Fragment key={index}>
          {slideComponent(item, index)}
        </React.Fragment>
      ))}
    />
  );
}
