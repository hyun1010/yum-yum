'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const defaultCenter = {
  lat: 37.5665,
  lng: 126.9788,
};

function Map({
  width = '100%',
  height = '400px',
}: {
  width?: string;
  height?: string;
}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [currentLocation, setCurrentLocation] =
    React.useState<google.maps.LatLng | null>(null);

  React.useEffect(() => {
    if (isLoaded && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (window.google && window.google.maps) {
            const location = new google.maps.LatLng(latitude, longitude);
            setCurrentLocation(location); // 현재 위치 저장

            // 위치를 찾으면 해당 위치로 맵을 재조정
            if (map) {
              map.setCenter(location); // 맵의 중심을 현재 위치로 설정
            }
          }
        },
        () => {
          console.error('현재 위치를 가져올 수 없습니다.');
          if (map) {
            map.setCenter(defaultCenter); // 위치를 가져오지 못하면 서울로 설정
          }
        }
      );
    }
  }, [isLoaded, map]);

  const onLoad = React.useCallback(
    function callback(map: google.maps.Map) {
      setMap(map);

      // 사용자의 위치가 없으면 기본 위치인 서울로 설정
      if (!currentLocation) {
        map.setCenter(defaultCenter);
      }
    },
    [currentLocation]
  );

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: width,
        height: height,
      }}
      center={defaultCenter} // 기본 위치를 서울로 설정
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* 현재 위치 마커 표시 */}
      {currentLocation && <Marker position={currentLocation} />}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
