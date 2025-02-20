import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Blog from '@/components/Blog';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Video from '@/components/Video';
import ShowCase from '@/src/widgets/showcase/ui/ShowCase';

export default function HomePage() {
  return (
    <>
      <ShowCase />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
