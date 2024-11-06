"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/ContainerScrollAnimation";
import { AnimatedTabs } from "./AnimatedTabs";

export function About() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             {/* <br /> */}
              <span className="text-4xl md:text-[4rem] font-bold mt-1 mb-2 leading-none">
              Why Hire Me for Your Next Project?
              </span>
            </h1>
          </>
        }
      >
        <AnimatedTabs />
        {/* <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
      </ContainerScroll>
    </div>
  );
}
