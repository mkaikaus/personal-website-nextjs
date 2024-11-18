import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import Footer from "@/components/Footer"
import RecentProjects from "@/components/ui/RecentProjects";
import Skills from "@/components/Skills";

import { Testimonials } from "@/components/Testimonials"
import Navbar from "@/app/Navbar/page";
import { Experience } from "./Experience";
import { About } from "@/components/About";
import { AnimatedTabs } from "./AnimatedTabs";
import Footer2 from "./Footer2";
import { Projects } from "./Projects";

import { Certificate } from "./Certificate";

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
          <Certificate />
          <Testimonials />

          {/* <Footer /> */}
          <Footer2 />
        </div>
      </main>
     
    </>
  );
}
