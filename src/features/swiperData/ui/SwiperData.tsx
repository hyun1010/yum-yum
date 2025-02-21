import { useGetData } from '@/src/shared/service';
import { Swiper } from '@/src/shared/ui';

interface SwiperDataProps<T> {
  dataUrl: string;
  SlideComponent: React.ComponentType<{ item: T }>;
}

export default function SwiperData<T>({
  dataUrl,
  SlideComponent,
}: SwiperDataProps<T>) {
  const { data, isLoading, error } = useGetData<T[]>(dataUrl);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Swiper
      slides={(data ?? []).map((item, index) => (
        <SlideComponent key={index} item={item} />
      ))}
    />
  );
}
