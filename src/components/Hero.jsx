"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { heroIcons } from '../assets/index';
import "remixicon/fonts/remixicon.css";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';




const Hero = () => {

  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 });

  const [mouseMove, setMouseMove] = useState(false);

  const [buttonHover, setButtonHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(e.clientX);
    y.set(e.clientY);

    // console.log(clientX, clientY, x, y);

  }

  const handleMouseEnter = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    setMouseMove(true);

  }



  const { innerWidth, innerHeight } = windowOffset;


  // stiffness controls how "rigid" the spring animation is - higher values make it more reactive/bouncy (100 is moderate)
  // damping controls how quickly the spring settles - lower values cause more oscillation (10 creates smooth movement)
  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);


  return (
    <div
      id="home"
      onMouseMove={handleMouseMove}
      className=" grid place-items-center h-screen"
      onMouseEnter={handleMouseEnter}
    >
      <div className="border-none border-[#dadada] rounded-lg p-5 hover:shadow-lg transition-shadow hover:bg-[#dadada] dark:border-white dark:hover:bg-black">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            style={{
              rotateY: mouseMove ? rotateY : 0,
              rotateX: mouseMove ? rotateX : 0,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={"/Assets/person.png"}
              alt="profile"
              width={400}
              height={400}
              priority={true}
              className=" h-auto w-[150px] object-cover"
            />

            <motion.span
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 1 : 0,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{
                opacity: { delay: 0.4 },
                duration: 0.3,
                ease: "easeOut",
              }}
              className="absolute text-3xl font-semibold text-white"
            >
              Hi
            </motion.span>
          </motion.div>

          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
            My Name is Sourav & I&apos;m a Full Stack Developer
          </h1>
          <p className="text-lg tracking-tighter text-gray-700 dark:text-gray-300 transition-colors">
            I like animation.🤗
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 sm:text-2xl justify-center mt-4"
        >
          {heroIcons.map((icon, i) => (
            <a
              href="#"
              key={i}
              className="bg-white rounded-full p-2 text-black hover:bg-red-500 hover:text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-500 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-600 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </motion.a>
      </div>
    </div>
  );
}

export default Hero