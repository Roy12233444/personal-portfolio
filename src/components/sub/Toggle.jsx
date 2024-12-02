"use client"

import { moonIcon, sunIcon } from "@/assets";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";



const Toggle = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const mainRef = useRef(null);

    useEffect(() => {
        // Check system preference on mount
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            addDarkTheme();
        }
    }, []);

    const addDarkTheme = () => {
        document.documentElement.classList.add("dark");
        setDarkTheme(true);
        localStorage.setItem('theme', 'dark');
    }

    const removeDarkTheme = () => {
        document.documentElement.classList.remove("dark");
        setDarkTheme(false);
        localStorage.setItem('theme', 'light');
    }

    useEffect(() => {
      const darkTheme = localStorage.getItem("theme");

      const systemTheme =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (darkTheme === undefined) {
        systemTheme ? addDarkTheme() : removeDarkTheme();
      } else {
        darkTheme === "dark" ? addDarkTheme() : removeDarkTheme();
      }

      console.log(darkTheme, systemTheme);
      
    }, []) 

     
    return (
        <main ref={mainRef}>
            <div className="bg-zinc-50 dark:bg-zinc-900">
                <div className="ma-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden">
                    <button 
                        onClick={() => {
                            if (!darkTheme) {
                                addDarkTheme();
                                localStorage.setItem('theme', 'dark');
                            } else {
                                removeDarkTheme();
                                localStorage.setItem('theme', 'light');
                            }
                        }}
                        className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500"
                    >
                        <motion.span animate={{scale: darkTheme ? 0 : 1}} className="absolute block rounded-full bg-zinc-50 dark:bg-zinc-800 p-1 text-4xl">
                            {darkTheme ? (
                                <div className="animate-[spin_3s_linear_infinite]">
                                    {sunIcon}
                                </div>
                            ) : (
                                <div className="animate-[bounce_1s_ease-in-out_infinite]">
                                    {moonIcon}
                                </div>
                            )}
                        </motion.span>
                        <motion.span animate={{scale: darkTheme ? 1 : 0}} className="absolute block rounded-full bg-zinc-50 dark:bg-zinc-900 p-1 text-3xl">
                            <div className="animate-[pulse_2s_ease-in-out_infinite]">
                                {sunIcon}
                            </div>
                        </motion.span>
                    </button>
                    {children}
                </div>
            </div>
        </main>
    );
}

export default Toggle