import React, { useState } from 'react'

// import { Binary, Menu } from "lucide-react";

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

// Font
import '@fontsource/poppins';

const Navbar = () => {    

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)  
  }

  return (
    <div className="flex items-center justify-between space-x-2 h-24 px-4 max-w-[1240px] mx-auto">
      {/* <Binary className="w-[50px] h-[40px] bg-black text-emerald-400"/> */}
      <h1 className="w-full font-semibold text-emerald-400 text-3xl"> BufferCode </h1>
      <ul className="hidden md:flex font-semibold text-white cursor-pointer">
        <li className="p-4 hover:text-emerald-400"> Home </li>
        <li className="p-4 hover:text-emerald-400"> About </li>
        <li className="p-4 hover:text-emerald-400"> Resources </li>
        <li className="p-4 hover:text-emerald-400"> Blogs </li>
        <li className="p-4 hover:text-emerald-400"> Contact </li>
      </ul>  
      <div onClick={handleNav} className='block md:hidden'> 
        {nav ? <AiOutlineClose size={20} className='text-white cursor-pointer'/> : <AiOutlineMenu size={20} className='text-white cursor-pointer' /> }
      </div>
      {/* Mobile menu */}
      <div className={nav ? `fixed left-[-8px] top-0 text-white transform font-semibold w-[60%] border-r h-full bg-slate-700 backdrop-filter backdrop-blur-xl bg-opacity-20 border-r-gray-500 ease-in-out duration-500` : `fixed left-[-100%] ease-in-out duration-400`}>
      <h1 className="font-semibold pt-3 text-emerald-400 text-3xl m-4"> BufferCode </h1>
        <ul className='uppercase cursor-pointer p-4'>
          <li className="p-4 hover:text-emerald-400"> Home </li>
          <li className="p-4 hover:text-emerald-400"> About </li>
          <li className="p-4 hover:text-emerald-400"> Resources </li>
          <li className="p-4 hover:text-emerald-400"> Blogs </li>
          <li className="p-4 hover:text-emerald-400"> Contact </li>  
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
