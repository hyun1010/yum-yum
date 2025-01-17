import React from 'react';
import { LocationMap } from '../widgets/locationMap';

export default function HomePage() {
  return (
    <>
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">섹션 1</h2>
        <p className="text-sm text-gray-700">섹션 1 콘텐츠</p>
      </section>
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">섹션 2</h2>
        <p className="text-sm text-gray-700">섹션 2 콘텐츠</p>
      </section>
      <LocationMap />
    </>
  );
}
