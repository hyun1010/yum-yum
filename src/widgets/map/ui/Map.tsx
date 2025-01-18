'use client';
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { defaultCenter } from '../consts';
import { Coordinates } from './Map.types';

interface GoogelMapProps {
  width?: string;
  height?: string;
}

export default function GoogleMap({
  width = '100%',
  height = '300px',
}: GoogelMapProps) {
  const [markerRef, marker] = useMarkerRef();
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
  }, [navigator.geolocation]);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}>
      <Map
        style={{ width, height }}
        defaultCenter={location}
        defaultZoom={10}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <Marker ref={markerRef} position={location} />
      </Map>
    </APIProvider>
  );
}
