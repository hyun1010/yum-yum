'use client';
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
  Pin,
  useAdvancedMarkerRef,
  useMarkerRef,
} from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { defaultCenter } from '../consts';
import { Coordinates } from './Map.types';

interface GoogelMapProps {
  width?: string;
  height?: string;
}

// 더미 핀 데이터 (일산 중심 좌표 기준으로 생성)
const dummyMarkers = [
  { id: 1, lat: 37.6611, lng: 126.7689 }, // 일산 호수공원
  { id: 2, lat: 37.6735, lng: 126.7523 }, // 킨텍스
  { id: 3, lat: 37.6584, lng: 126.7758 }, // 일산역
  { id: 4, lat: 37.6688, lng: 126.7613 }, // 라페스타
  { id: 5, lat: 37.667, lng: 126.7712 }, // 웨스턴돔
  { id: 6, lat: 37.6715, lng: 126.7852 }, // 대화역
  { id: 7, lat: 37.6578, lng: 126.7554 }, // 정발산역
  { id: 8, lat: 37.6536, lng: 126.767 }, // 화정역
  { id: 9, lat: 37.6641, lng: 126.7769 }, // 일산 문화공원
  { id: 10, lat: 37.6692, lng: 126.7478 }, // 주엽역
];

export default function GoogleMap({
  width = '100%',
  height = '300px',
}: GoogelMapProps) {
  const [markerRef, marker] = useMarkerRef();
  const [advancedMarker, advanced] = useAdvancedMarkerRef();
  const [location, setLocation] = useState<Coordinates>(defaultCenter);

  useEffect(() => {
    if (!marker) {
      return;
    }
  }, [marker]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          if (window.google && window.google.maps) {
            setLocation({ lat, lng });
          }
        },
        () => {
          console.error('현재 위치를 가져올 수 없습니다.');
          setLocation(defaultCenter);
        }
      );
    }
  }, []);

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}
      libraries={['marker']}
    >
      <Map
        mapId={'3e7acee3a93941da'}
        style={{ width, height }}
        defaultCenter={location}
        defaultZoom={13}
        gestureHandling={'greedy'}
        clickableIcons={false}
        disableDefaultUI
      >
        <Marker ref={markerRef} position={location} />
        {dummyMarkers.map((item) => (
          <AdvancedMarker
            key={item.id}
            ref={advancedMarker}
            position={{ lat: item.lat, lng: item.lng }}
          >
            <Pin
              background={'#22ccff'}
              borderColor={'#1e89a1'}
              glyphColor={'#0f677a'}
            />
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}
