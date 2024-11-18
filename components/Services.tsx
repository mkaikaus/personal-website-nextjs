import React from "react";
import { Meteors } from "./ui/Meteors";

export function Services() {
  return (
    <div className="flex space-x-4">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 md:py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold md:text-xl text-white mb-4 relative z-50">
            Frontend Development
          </h1>

          <p className="font-normal text-sm md:text-base text-slate-500 mb-4 relative z-50">
          Expertise in building dynamic, responsive user interfaces with React.js and Next.js, ensuring high performance and seamless user experiences across devices.
          </p>

          <Meteors number={20} />
        </div>
      </div>
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

          <h1 className="font-bold md:text-xl text-white mb-4 relative z-50">
            Web Development
          </h1>

          <p className="font-normal text-sm md:text-base text-slate-500 mb-4 relative z-50">
          Skilled in HTML, CSS, PHP, and various CSS frameworks to create efficient, scalable, and visually appealing websites tailored to project needs.
          </p>

          <Meteors number={20} />
        </div>
      </div>
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold md:text-xl text-white mb-4 relative z-50">
            Frontend Testing
          </h1>

          <p className="font-normal text-sm md:text-base text-slate-500 mb-4 relative z-50">
          Specializing in Cypress testing to deliver robust, bug-free applications by conducting thorough UI validation and ensuring high-quality performance.
          </p>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
