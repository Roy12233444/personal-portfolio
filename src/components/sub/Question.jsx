"use client"

import { QuestionArrow } from "@/assets";
import { motion } from "framer-motion";
import { useState } from "react";





const Question = ({ data, index }) => {

    const [show, setShow] = useState(false);

    const variants = {
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.07 

            }
        }),
        hidden: {
            opacity: 0,
            x: -30,
        },
      };


  return (
    <motion.li
    
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ margin:"50px", once: true }}
    variants={variants}
    

    className="border libordr border-yellow-500 p-3 rounded-lg">

      <h1
        className={`flex items-center text-xl font-extralight tracking-wide text-gray-800 hover:text-yellow-600 transition-colors duration-300 ease-in-out cursor-pointer ${show ? "text-blue-500" : ""} ${show ? "border-b-2 border-gray-200 pb-2 text-blue-900" : ""} dark:text-white dark:hover:text-yellow-600 transition-colors`}



        onClick={() => setShow(!show)}
      >


        <motion.span animate={{ rotate: show ? 180 : 0 }}>


          {QuestionArrow}


        </motion.span>

        <span className="text-xl rounded-lg border-yellow-500 dark:text-white dark:hover:text-yellow-600 transition-colors">
          {data.question}
        </span>
      </h1>

      <motion.p 
      
      initial={{ scaleY: 0, height: 0, opacity: 0 }}
      animate={{scaleY: show ? 1 : 0, height: show ? "auto" : 0, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.1, type: "spring", stiffness: show ? 250 : 50, opacity: show ? .2 : 0 }}
      
      className=" box-border origin-top  rounded-lg  border-none border-yellow-500   pl-8 text-lg font-extralight tracking-wide text-gray-900 first-letter:pl-3 dark:text-white">
        {data.answer}
      </motion.p>
    </motion.li>
  );
}

export default Question