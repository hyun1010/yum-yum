import { useGetData } from '@/src/shared/service';
import { Swiper } from '@/src/shared/ui';
import React from 'react';

interface SwiperDataProps<T> {
  dataUrl: string;
  dataParams?: object;
  slideComponent: (item: T) => React.ReactElement;
}

export default function SwiperData<T>({
  dataUrl,
  dataParams,
  slideComponent,
}: SwiperDataProps<T>) {
  const { data, isPending, error } = useGetData<T[]>(dataUrl, dataParams);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Swiper
      slides={(data ?? []).map((item, index) => (
        <React.Fragment key={index}>{slideComponent(item)}</React.Fragment>
      ))}
    />
  );
}
