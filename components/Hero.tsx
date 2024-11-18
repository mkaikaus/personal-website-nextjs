import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import NormalButton from './ui/NormalButton'
import { GiTexas } from "react-icons/gi";
import image from "../public/mobileHero.png"
import Image from 'next/image'
import { TypewriterEffectSmooth } from './ui/TypewriterEffect'
import Type from '@/app/Types/page'

const Hero = () => {
    const words = [
        {
            text: "A",
        },
        {
            text: "Frontend",
        },
        {
            text: "Developer",
        },
        {
            text: "with",
        },
        {
            text: "expertise",
        },
        {
            text: "in",
        },
        {
            text: "React.js.",
            className: "text-[#3b82f6] dark:text-[#7dd3fc]",
        },
    ];
    return (
        <div className='mt-20 md:mt-20 pb-10 flex flex-col w-full items-center'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#0284c7' />
                <Spotlight className='top-20 left-full h-[80vh] w-[50vw]' fill='white' />
                <Spotlight className='top-40 left-full h-[80vh] w-[50vw]' fill='#0284c7' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='white' />
            </div>

            {/* <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div> */}

            <div className='flex flex-col flex-col-reverse md:flex-row md:flex-row-reverse relative z-10 items-center justify-center max-w-[1024px] md:mr-10'>

                {/* <Image src={image} alt='Hero Image' priority={true} className='mt-10 max-w-[300px] rounded-[20px] border border-slate-500 mb-4 md:block hidden'/> */}

                <div className='flex relative my-4 z-10 flex-col px-8'>

                    <div className='flex flex-col items-center justify-center'>


                        {/* <TextGenerateEffect
                            className='text-center text-[32px] md:max-w-2xl md:text-[42px]'
                            words="Bridging the Gap Between Business & Technology"
                        /> */}



                        <h1 className="text-2xl relative z-20 md:text-3xl lg:text-5xl font-bold text-center text-slate-400 tracking-tight mb-16">
                            Hey!{" "}
                            <span role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-slate-300 tracking-tight">
                            I'm Maleeha Kaikaus.
                            {/* <div className="relative mx-auto ml-3 inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] z-50">
                                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                    <span className=""> Maleeha Kaikaus.</span>
                                </div>
                                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                                    <span className=""> Maleeha Kaikaus.</span>
                                </div>
                            </div> */}
                            <div className="pt-6 pb-12 text-left text-2xl md:text-3xl lg:text-4xl text-slate-300 text-center">
                                <TypewriterEffectSmooth words={words} />
                            </div>
                        </h2>


                        {/* <Image src={image} priority={true} alt='Hero Image' className='max-w-[220px] rounded-[20px] border border-slate-500 mb-4 md:hidden block' /> */}

                        {/* <p style={{ display: 'inline' }} className='text-center lg:tracking-wider lg:text-lg xlg:text-2xl mb-4'>
                            I&apos;m Joe, a Web Developer based out of
                            Dallas, TX
                            <GiTexas
                                style={{ verticalAlign: 'middle', display: 'inline' }}
                                className='text-[15px] md:text-[25px] ml-2'
                            />
                        </p>
                        <div className='flex gap-8'>
                            <a href='#projects'>
                                <NormalButton
                                    title="View Work" />
                            </a>
                            <a href='#contact'>
                                <ShimmerButton
                                    title="Contact" /></a>
                        </div> */}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Hero