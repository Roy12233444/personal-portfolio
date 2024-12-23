"use client"

import { navbarData } from "@/assets";
import { copyrightIcon } from "@/assets";
import Link from "next/link";

const Navbar = ({id}) => {
  return (
    <div className="w-[70px] h-full dark:bg-zinc-900 fixed left-0 top-0 flex flex-col  ml-2 border-red-500 justify-between p-4 xl:py-6 border-r-2 z-10">
      <Link href="/#home" className="flex flex-col items-center">
        <span className="text-3xl font-semibold text-red-500">S</span>
        <span className=" block w-min rotate-90 origin-bottom text-[12px] font-semibold dark:text-white">
          Ray
        </span>
      </Link>

      <div className="flex flex-col xl:gap-y-1 items-center gap-y-3 sm:gap-y-2">
        {navbarData.map((item, i) => (
          <a
            key={i}
            href={`/#${item.id}`}
            className="group flex flex-col items-center gap-y-2"
          >
            <span
              className={`text-2xl group-hover:scale-125 transition-all duration-300 xl:group-hover:scale-115  ease-in-out ${
                item.id === id
                  ? "text-red-500 scale-110 xl:scale-100"
                  : "text-yellow-600 scale-100 xl:scale-90"
              }`}
            >
              {item.icon}
            </span>

            <span
              className={`text-[10px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center border-2 cursor-pointer border-red-500 px-1 rounded-md shadow-md border-none ${i % 2 === 0 ? "translate-x-2" : "-translate-x-2"} ${item.id === id && "-translate-x-0 opacity-100"} dark:text-white`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-white">
          {copyrightIcon} 2019 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
}

export default Navbar