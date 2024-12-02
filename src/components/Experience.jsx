// This directive marks this component as a Client Component in Next.js,
// allowing it to use client-side features like hooks, event handlers, and browser APIs
"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { experienceData } from "@/assets";
import { arrowLeftIcon } from "../../public/Assets";
import { motion, useScroll, useSpring } from "framer-motion";
import {useRef} from "react";






const Experience = () => {

  const date = new Date().getFullYear();

  const containerRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"]
  })

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    
  })



    return (
      <div 
      id='experience'
      className="relative py-1   ">
        <Heading className="cursor-pointer px-6" text={"Experience and Education 📚"} />
        <Image
          className="absolute  top-10 right-36 opacity-70 lg:hidden"
          src={"/Assets/education.png"}
          alt="experience"
          width={400}
          height={400}
        />
        <div ref={containerRef}
         className="w-full h-full flex flex-col justify-center items-center gap-y-10 lg:gap-y-20 py-10">
          {experienceData.map((data, i) => (
            <div
              key={`id-${i}`}
              className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative -left-[300p ${
                i % 2 === 0
                  ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                  : "left-[300px] xl:left-[240px] lg:left-0"
              }`}
            >
              <motion.div 

              initial={{opacity: 0, x: i%2 === 0 ? -80 : 80}} 

              whileInView={{opacity: 1, x: 0}} 

              viewport={{once: true}} 
              
              transition={{duration: 0.7, type: "spring", stiffness: 50, ease: "easeInOut"}}
              
              className="relative flex flex-col gap-y-3 rounded-md border border-red-300 dark:border-zinc-200 bg- p-5 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors">
                <h1 className="text-xl sm:text-lg font-bold border-2 border-red-300 p-2 rounded-md bg-red-300 text-gray-700 dark:bg-zinc-700 dark:border-zinc-200 dark:text-white transition-colors">
                  {data.title}
                </h1>

                <p className="text-gray-800 dark:text-gray-100 transition-colors">
                  <span className="block font-normal p-2 border-2 border-none rounded-md bg-slate-200 text-gray-700 dark:bg-zinc-700 dark:text-white transition-colors ">{data.education}</span>
                  {/* <span className="block pl-2 font-extralight">
                    {data.education}
                  </span> */}
                </p>

                <div className="text-gray-800 dark:text-gray-200 transition-colors">
                  <span className="block font-bold p-2 border-2 border-red-300 dark:bg-zinc-700 dark:border-zinc-200 rounded-md bg-red-400 text-gray-700 dark:text-white transition-colors">Experience:</span>
                  <ul className="block pl-2 font-extralight">
                    {data.experience.map((exp, j) => (
                      <li key={`id-${j}`} className="my-1 font-normal border-2 border-none px-1 py-1 mt-2 rounded-md bg-slate-200 text-gray-700 dark:bg-zinc-700 dark:text-white transition-colors">
                        {exp}
                      </li>
                    ))}
                    {/* <li className="my-1 font-extralight">experience</li> */}
                  </ul>
                </div>

                <span
                  className={`absolute top-20  text-red-300 -translate-y-1/2 ${
                    i % 2 === 0 ? "left-full rotate-180" : "right-full"
                  }`}
                >
                  {arrowLeftIcon}
                </span>
              </motion.div>

              <div
                className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                  i % 2 === 0
                    ? "left-full -translate-x-1/2  lg:left-1/2"
                    : "right-full translate-x-1/2  lg:right-1/2"
                }`}
              >
                {data.year === 1
                  ? "2017"
                  : data.year === 2
                  ? "2020"
                  : data.year === 3
                  ? "2022"
                  : "2023"}
              </div>
            </div>
          ))}

          <motion.div 

          initial={{scaleY: 0}} 

          style={{scaleY: scrollY}} 

          className="absolute w-1 h-full rounded-full bg-slate-300 origin-top"></motion.div>
        </div>
      </div>
    );
}

export default Experience