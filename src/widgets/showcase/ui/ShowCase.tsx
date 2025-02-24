'use client';
import ShowCaseSwiper from './ShowCaseSwiper';

export default function ShowCase() {
  return (
    <section
      id="home"
      className="w-full overflow-hidden h-full bg-gradient-to-b from-[#E2F6FC] to-white"
    >
      <ShowCaseSwiper />
      <div className="absolute bottom-6 flex w-full items-center justify-center space-x-4">
        <span className="text-sm font-medium text-gray-600">05 / 11</span>
        <button className="h-8 w-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
          ◀
        </button>
        <button className="h-8 w-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
          ▶
        </button>
      </div>
    </section>
  );
}
