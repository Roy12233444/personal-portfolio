"use client";

import React from 'react'
import Heading from './sub/Heading';
import Image from 'next/image';
import Achievements from './sub/Achievements';
import { aboutData, aboutText, downloadIcons, arrowLeftIcons } from '@/assets';

const About = () => {
  return (
    <div 
    id='about'
    className="min-h-screen  main2 rounded-xl mb-7  ml-10  flex flex-col items-center justify-center ">
      <Heading className="text-white" text={"About Me"} />
      <div className="w-[70vw]  px-3 flex items-center justify-between md:justify-center">
        <Image
          className="w-[300px] lg:w-[200px] md:hidden"
          src="/Assets/about-me.png"
          alt="about"
          width={400}
          height={400}
        />
        <div className="relative  rounded-xl bg-zinc-300 hover:bg-zinc-600 hover:text-white   hover:shadow-lg duration-300 p-5 text-justify dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-500 md:hidden dark:text-zinc-700 transition-colors">
            {arrowLeftIcons}
          </span>

          <p className="mb-6 font-light text-lg first-letter:pl-3 lg:text-[16px] sm:text-[14px] leading-relaxed dark:text-white transition-colors">
            {aboutText}
          </p>

          <a
            href="/Assets/(SOURAV_RAY_CV) .pdf"
            download="SOURAV_RAY_CV.pdf"
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border-gray-300 font-bold bg-red-400 px-4 py-2 hover:bg-red-600 hover:shadow-lg transition-all duration-300"
          >
            <span>Download CV</span>

            <button className="Btn">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </button>
          </a>
        </div>
      </div>

      <div className="mt-20 w-full flex flex-start items-center justify-between gap-x-40 gap-y-10 ">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            <div className="text-black dark:text-white transition-colors">{item.icon}</div>
          </Achievements>
        ))}
      </div>
    </div>
  );
}

export default About