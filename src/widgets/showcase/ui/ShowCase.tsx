'use client';
import ShowCaseSwiper from './ShowCaseSwiper';

export default function ShowCase() {
  return (
    <section
      id="home"
      className="w-full overflow-hidden h-[calc(100vh-100px)] min-h-[calc(100vh-100px)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-50 to-white h-[300px]"></div>
      <ShowCaseSwiper />
    </section>
  );
}
