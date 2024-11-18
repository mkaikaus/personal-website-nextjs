"use client";

import Image from "next/image";
import { Tabs } from "./ui/Tabs";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { HoverEffect } from "./ui/Card-hover-effect";
import Tools from "./Tools";
import { Education } from "./Education";
import { Services } from "./Services";


const words = `As a software engineer, I focus on building user-friendly, visually appealing applications, drawing on hands-on experience in developing seamless frontend interfaces integrated with backend systems. Skilled in tools like React, Next.js, Laravel, Tailwind CSS, and Material UI, I’m always eager to learn and take on new challenges. With a commitment to growth, I’m excited to continue making a positive impact through my work in this field.
`;


export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Myself",
      value: "myself",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 lg:p-10 text-lg md:text-2xl font-bold text-white bg-gradient-to-br from-[#60a5fa] to-violet-900">
          <p className="md:text-4xl text-black">My Self</p>
          <div className="lg:m-5 border-rounded p-2 lg:p-5 bg-neutral-900 border-4 rounded-2xl border-neutral-700 shadow-lg">
            <TextGenerateEffect words={words} />
          </div>

        </div>
      ),
    },

    {
      title: "Tools",
      value: "tools",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#67e8f9] to-violet-900 z-50">
          <p className="md:text-4xl text-black ">Tools</p>
          <Tools />
          {/* <HoverEffect items={projects} /> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },

    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#bae6fd] to-violet-900">
          <p className="md:text-4xl text-black">Services</p>
          <Services />
          {/* <DummyContent /> */}
        </div>
      ),
    },

    {
      title: "Education",
      value: "education",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#93c5fd] to-violet-900">
          <p className="md:text-4xl text-black">Education</p>
          <Education />
          {/* <DummyContent /> */}
        </div>
      ),
    },
  ];

  return (
    <div className="h-[28rem] md:h-[30rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
