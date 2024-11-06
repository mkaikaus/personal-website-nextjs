import { motion } from "framer-motion";
import { skills } from "./properties";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { BackgroundGradient } from "./ui/Background-gradient";
import Image from "next/image";
import React from "react";



const Tools = () => {
    const keycaps = ["Ctrl", "⌘", "Alt"];

    return (
        <>
            <div
                className="w-full flex flex-col items-center justify-center"
                id="skills"
            >
                {/* <motion.div
                    className=" text-4xl font-bold lg:hidden pt-24 text-center"
                    initial={{ opacity: 0.0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    Skills
                    <div className="font-normal text-base  text-violet-300 mt-1">
                        <p>My current tech stack.</p>
                    </div>
                </motion.div> */}

                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center z-10 md:my-5">
                    <div className="flex flex-col">
                        {/* <motion.div
                            className=" text-3xl lg:text-4xl font-bold hidden lg:block"
                            initial={{ opacity: 0.0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            Skills
                            <div className="font-normal text-base  text-violet-300 mt-1">
                                <p>My current tech stack.</p>
                            </div>
                        </motion.div> */}

                        <div className="lg:hidden bg-neutral-950 w-108 flex flex-col gap-2 text-lg text-center p-1 font-normal border-4 rounded-2xl border-neutral-700 shadow-lg shadow-black">
                            {Object.keys(skills).map((skill, index) => {
                                const skillList = skills[skill];
                                return (
                                    <div key={`skill-${index}`} className="px-2">
                                        <h3 className="font-medium p-1">{skill}</h3>
                                        <div className="grid grid-flow-row place-items-center grid-cols-4 gap-3">
                                            {skillList.map((item, itemIndex) => (
                                                <React.Fragment key={`item-${itemIndex}`}>
                                                    <div className="flex flex-col gap-2 items-center hover:scale-105 ">

                                                        <Image
                                                            className="h-10 w-10 bg-black rounded-2xl text-center shadow-md  shadow-black"
                                                            src={item.imagePath}
                                                            width={256}
                                                            height={256}
                                                            alt={item.description}
                                                        />

                                                        <p className="text-xs font-bold">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </React.Fragment>
                                            ))}

                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <motion.div
                            className="hidden my-auto bg-neutral-950 lg:flex text-lg font-normal flex-row w-full gap-12 border-4 p-8 rounded-2xl border-neutral-700 shadow-lg shadow-black "
                            initial={{
                                opacity: 1,
                                transformOrigin: "top center",
                                rotateX: -95,
                                backfaceVisibility: "hidden"
                            }}
                            whileInView={{ opacity: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0,
                                duration: 1.8,
                                ease: "easeInOut",
                            }}

                        >
                            {Object.keys(skills).map((skill, index) => {
                                const skillList = skills[skill];
                                return (
                                    <div key={`skill-${index}`}>
                                        <h3 className="text-xl font-medium">{skill}</h3>
                                        <div className="grid grid-flow-row place-items-center grid-cols-2 gap-6">
                                            {skillList.map((item, itemIndex) => (
                                                <React.Fragment key={`item-${itemIndex}`}>
                                                    <div className="flex flex-col gap-2 items-center hover:scale-105">
                                                        <BackgroundGradient animate={true} className="">
                                                            <Image
                                                                className="h-16 w-16 bg-black rounded-2xl text-center"
                                                                src={item.imagePath}
                                                                width={256}
                                                                height={256}
                                                                alt={item.description}
                                                            />
                                                        </BackgroundGradient>
                                                        <p className="text-xs font-bold">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </React.Fragment>
                                            ))}

                                            {/* {skill === "Frameworks" && (
                                                <div className="w-full col-span-3 hidden lg:block">
                                                    <BackgroundGradient animate={true}>
                                                        <div className="h-16  bg-black rounded-2xl text-center "></div>
                                                    </BackgroundGradient>
                                                </div>
                                            )} */}

                                            {/* {skill === "Languages" && (
                                                <>
                                                    <div className="w-full col-span-3 hidden lg:grid grid-cols-3 place-items-center gap-6 select-none">
                                                        {keycaps.map((keyCap, keyIndex) => (
                                                            <BackgroundGradient
                                                                animate={true}
                                                                className="hidden lg:block"
                                                                key={`keyCap-${keyIndex}`}
                                                            >
                                                                {/* <div className="h-16 w-24  bg-black rounded-2xl text-center flex items-center justify-center text-neutral-500">
                                                                    {keyCap}
                                                                </div> */}
                                                            {/* </BackgroundGradient>
                                                        ))}
                                                    </div>
                                                </>
                                            )} */} 

                                            {/* {skill === "Frameworks" && (
                                                <div className="w-full col-span-3 hidden lg:block">
                                                    <BackgroundGradient animate={true}>
                                                        <div className="h-24  bg-black rounded-2xl text-center "></div>
                                                    </BackgroundGradient>
                                                </div>
                                            )} */}
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tools