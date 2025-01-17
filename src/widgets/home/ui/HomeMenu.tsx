import { RoutingButton } from '@/src/features/routingButton';
import React from 'react';

export default function HomeMenu() {
  return (
    <div className="bg-gray-50 px-4 py-6 flex items-center justify-center gap-5 rounded-md border border-gray-100">
      <RoutingButton type="both" src="/next.svg" href="/" label="추천 맛집" />
      <RoutingButton type="both" src="/next.svg" href="/" label="추천 카페" />
      <RoutingButton type="both" src="/next.svg" href="/" label="추천 술집" />
      <RoutingButton type="both" src="/next.svg" href="/" label="종류별 검색" />
      <RoutingButton type="both" src="/next.svg" href="/" label="지역별 검색" />
    </div>
  );
}
