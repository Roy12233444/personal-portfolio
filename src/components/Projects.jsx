"use client"

import { useEffect, useRef, useState } from "react"
import Heading from "./sub/Heading"
import Project from "./sub/Project"
import { projectsButton, projectsData } from "@/assets"
import { animate, motion } from "framer-motion"

const Projects = () => {
  const [tech, setTech] = useState("All")
  const [index, setIndex] = useState(0)
  const prevIndex = useRef(0)
  const buttonsRef = useRef({}) // Changed from array to object

  const handleClick = () => {
    // Reset all buttons to default state
    Object.values(buttonsRef.current).forEach(button => {
      if (button) {
        animate(button, { opacity: 0.5, scale: 1 })
      }
    })
    // Highlight selected button
    if (buttonsRef.current[index]) {
      animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 })
    }
  }

  useEffect(() => {
    handleClick()
    prevIndex.current = index
  }, [index])

  return (
    <div 
    id='projects'
    className="min-h-screen py-20 ">
      <Heading text="Projects" />
      <div className="flex btwn w-[70vw]  dark:bg-zinc-700 rounded-lg ml-40  flex-wrap  items-center justify-between gap-4 p-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-500 transition-colors">
        {projectsButton.map((text, i) => {
          // Count projects for this tech
          const projectCount = projectsData.filter(project => 
            text === "All" ? true : project.tech.includes(text)
          ).length

          return (
            
            <motion.button
            key={i}
              initial={{opacity: i === 0 ? 1: 0.5, scale: i === 0 ? 1.2 : 1}}
              ref={(el) => {
                if (el) buttonsRef.current[i] = el
              }}
              onClick={() => {
                setTech(text)
                setIndex(i)
              }}
              className="relative p-1 hover duration-200 ease-linear transform hover:scale-105 before:absolute before:bottom-[1px] before:bg-[#dadadabb] before:h-[2px] before:left-0 before:w-full before:rounded before:transition-all before:duration-200 hover:before:bg-black focus:before:bg-black pointer-events-auto rounded cursor-pointer hover:text-black dark:bg-zinc-100 dark:p-2 transition-colors"
            >
              <span className="block transition-all duration-150 hover:-translate-y-0">
                {text.split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-150"
                    style={{
                      transitionDelay: `${index * 15}ms`,
                      transform: "",
                    }}
                  >
                    {char}
                  </span>
                ))}
                {`(${projectCount})`}
              </span>
            </motion.button>
          )
        })}
      </div>

      <div className="flex projecttt border-2 mr-9 p-2 mt-4 border-none  h-full min-w-screen flex-wrap items-start justify-evenly gap-5">
        {projectsData.filter((project) => 
        {return project.tech.some((item) => tech === "All" ? true : item === tech)})
        .map((data, i) => (
          <motion.div key={`id-${i}`} layout>
            <Project data={data} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects