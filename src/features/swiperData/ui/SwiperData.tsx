import { useGetData } from '@/src/shared/service';
import { Swiper } from '@/src/shared/ui';

interface SwiperDataProps<T> {
  dataUrl: string;
  dataParams?: object;
  SlideComponent: React.ComponentType<{ item: T }>;
}

export default function SwiperData<T>({
  dataUrl,
  dataParams,
  SlideComponent,
}: SwiperDataProps<T>) {
  const { data, isPending, error } = useGetData<T[]>(dataUrl, dataParams);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Swiper
      slides={(data ?? []).map((item, index) => (
        <SlideComponent key={index} item={item} />
      ))}
    />
  );
}
