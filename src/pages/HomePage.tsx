import React from 'react';
import { HomeMenu } from '../widgets/home';
import { Map } from '../widgets/map';

export default function HomePage() {
  return (
    <>
      <HomeMenu />
      <Map />
      <section className="bg-white p-4 rounded-lg border border-gray-50">
        <h2 className="text-lg font-semibold mb-2">섹션 1</h2>
        <p className="text-sm text-gray-700">섹션 1 콘텐츠</p>
      </section>
      <section className="bg-white p-4 rounded-lg border border-gray-50">
        <h2 className="text-lg font-semibold mb-2">섹션 2</h2>
        <p className="text-sm text-gray-700">섹션 2 콘텐츠</p>
      </section>
      <section className="bg-white p-4 rounded-lg border border-gray-50">
        <h2 className="text-lg font-semibold mb-2">섹션 2</h2>
        <p className="text-sm text-gray-700">섹션 2 콘텐츠</p>
      </section>
      <section className="bg-white p-4 rounded-lg border border-gray-50">
        <h2 className="text-lg font-semibold mb-2">섹션 2</h2>
        <p className="text-sm text-gray-700">섹션 2 콘텐츠</p>
      </section>
    </>
  );
}
