"use client";

import React from 'react'
import Heading from './sub/Heading';
import Image from 'next/image';

import { skillsData } from '@/assets';

import { motion } from 'framer-motion';

const Skills = () => {
    const variants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.7
            }
        }),
        hidden: {
            opacity: 0,
            y: 30,
        }
    }
    return (
        <div 
        id='skills'
        className="min-h-screen flex flex-col items-center justify-center mt-20 bg-transparent ml-10 mr-10 mb-20 p-10 border-2 border-black border-none rounded-lg gap-y-20 ">
            <Heading text={"Skills"} />
            <div className="w-full skillbg border cursor-pointer  border-yellow-500 p-16 rounded-lg bg-zinc-100 dark:bg-zinc-700 transition-colors grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8 sm:grid-cols-2 shadow-lg md:grid-cols-3 border-none lg:grid-cols-4">
                {skillsData.map((item, i) => (
                    <motion.div
                        custom={i}
                        variants={variants}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 * i }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ margin: "50px", once: true }}
                        key={`id-${i}`}
                        className="flex image hover:bg-blue-500 hover:text-white transition-all duration-300 items-center justify-center gap-x-3 rounded-xl border border-none shadow-lg bg-zinc-300 px-5 py-2 lg:px-2"
                    >
                        <Image
                            className="w-16 h-auto lg:w-12 lg:h-12 border-2 border-black rounded-lg p-1 border-none shadow-lg bg-slate-300"
                            src={item.icon}
                            alt="Skills Image"
                            width={100}
                            height={100}
                        />

                        <p className="flex border border-black p-1 rounded-lg bg-zinc-100 text-black shadow-lg border-none justify-center items-center mt-3">
                            {item.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills