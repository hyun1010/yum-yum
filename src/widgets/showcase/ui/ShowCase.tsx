'use client';
import { Swiper } from '@/src/shared/ui';
import Link from 'next/link';

export default function ShowCase() {
  return (
    <section
      id="home"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center items-center gap-8">
          <div className="grow px-4 max-w-[400px] text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Startup & SaaS
            </h1>
            <p className="dark:text-body-color-dark mb-12 text-base leading-relaxed text-body-color sm:text-lg md:text-xl">
              Next 13.x and Tailwind CSS.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://nextjstemplates.com/templates/saas-starter-startup"
                className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                🔥 Get Pro
              </Link>
              <Link
                href="https://github.com/NextJSTemplates/startup-nextjs"
                className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
              >
                Star on GitHub
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[800px] overflow-hidden">
            <Swiper
              slides={[
                <div
                  className="bg-blue-200 h-[500px] flex items-center justify-center"
                  key="1"
                >
                  Slide 1
                </div>,
                <div
                  className="bg-green-200 h-[500px] flex items-center justify-center"
                  key="2"
                >
                  Slide 2
                </div>,
                <div
                  className="bg-yellow h-[500px] flex items-center justify-center"
                  key="3"
                >
                  Slide 3
                </div>,
                <div
                  className="bg-red-200 h-[500px] flex items-center justify-center"
                  key="4"
                >
                  Slide 4
                </div>,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
