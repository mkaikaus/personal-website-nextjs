import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials"
import Navbar from "@/app/Navbar/page";
import { Experience } from "./Experience";
import { About } from "@/components/About";
import Footer2 from "./Footer2";
import { Certificate } from "./Certificate";
import { Projects } from "./Projects";
import { BentoGridSecondDemo } from "./project-section";

export default function Home() {
  return (
    <>
      {/* <AnimatedTabs /> */}
      <Navbar />
      <main id='home' className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <About />
          <Experience />
          <Projects />

          {/* <BentoGridSecondDemo /> */}
          {/* <FeaturesSection /> */}
          <Certificate />
          <Testimonials />

          {/* <Footer /> */}
          <Footer2 />
        </div>
      </main>
     
    </>
  );
}
