import React from 'react'

const Heading = ({text}) => {
  return (
    <div className='ml-14 p-1'>
      <h1 className="text-3xl relative border-b-[1px] p-1 border-gray-300 after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full hover:rounded after:transition-all after:duration-300 pointer-events-auto md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-600 mb-14 w-full text-center uppercase cursor-pointer dark:text-white transition-colors">
        {text}
      </h1>
    </div>
  );
}

export default Heading