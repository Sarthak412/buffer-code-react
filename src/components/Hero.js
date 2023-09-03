import React from 'react'

import ReactTyped from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-emerald-400 font-bold p-2 md:text-3xl sm:text-4xl text-2xl'> Innovate. Automate. Thrive. </p> 
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> Code your way to Success </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                    With code you, 
                </p> 
                <ReactTyped
                    className='md:text-5xl sm:text-4xl text-xl font-bold text-emerald-400 md:pl-4 pl-2' 
                    strings={['Innovate', 'Create', 'Automate']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop 
                />  
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>
                Unlocking Possibilities through the Power of Code.
            </p>
            <button className='outline outline-emerald-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-emerald-500/10 hover:transition-all'> Get Started </button>
        </div>    
    </div>
  )
}

export default Hero