"use client"

import { motion } from "framer-motion";
import Image from "next/image"
import { useState } from "react";

const Project = ({ data, index }) => {

  const [show, setShow] = useState(false)

  return (
    <motion.div

      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{once:true}}

      transition={{ duration: 1, type: "spring", stiffness: 100 }}

      onClick={() => setShow((show) => !show)}

      className="w-[350px]  sm:w-full h-max border border-gray-400 p-2 bg-gray-200 rounded-lg cursor-pointer relative">
      <div className="relative">
        <Image
          className="rounded-lg"
          src={data.url}
          alt="Project Image"
          width={400}
          height={400}
        />

        <motion.div 
        
        initial={{opacity: 0}}
        
        animate={{opacity: show ? 1 : 0}}
        
        className="absolute bg-black/75  top-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100 duration-300 rounded-lg dark:bg-zinc-700/95 transition-colors">
          <h2 className="text-black border-none bg-[#dadada] dark:bg-zinc-700 border-2 px-2 mt-2 leading-tight rounded-md text-lg font-bold mb-2 dark:text-white transition-colors">
            {data.name}
          </h2>

          <p className="text-justify border-2 px-5 bg-[#dadada] border-none dark:text-gray-100 text-black ml-2 mr-2 rounded-md  first-letter:pl-2 mb-4 dark:bg-zinc-700 transition-colors">
            {data.desc}
          </p>
        </motion.div>


      </div>
      <div className="flex mt-2 justify-between">
        <a
          href={data.code}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Code
        </a>
        <a
          href={data.preview}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Preview
        </a>
      </div>
    </motion.div>
  );
}

export default Project