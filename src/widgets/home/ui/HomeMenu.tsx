import { RoutingButton } from '@/src/features/routingButton';

export default function HomeMenu() {
  return (
    <div className="bg-gray-50 px-3 py-6 flex items-center justify-center gap-6 rounded-md border border-gray-100">
      <RoutingButton type="both" src="/heart.png" href="/" label="추천 맛집" />
      <RoutingButton type="both" src="/cake.png" href="/" label="추천 카페" />
      <RoutingButton type="both" src="/wine.png" href="/" label="추천 술집" />
      <RoutingButton type="both" src="/pets.png" href="/" label="애견 동반" />
      <RoutingButton type="both" src="/colors.png" href="/" label="종류별" />
    </div>
  );
}
