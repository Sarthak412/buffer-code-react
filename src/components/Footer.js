import React from 'react'
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaDribbble,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className="w-full font-semibold text-emerald-400 text-3xl"> BufferCode </h1>    
            <p className='py-4'> At <span className='font-semibold'> BufferCode </span>, we are passionate about empowering aspiring programmers with the knowledge and skills they need to thrive in the world of coding. Our platform offers a wealth of resources, tutorials, and expert tips to help you on your coding journey. Whether you're a beginner taking your first steps or an experienced developer looking to stay updated, we're here to support your growth and success in the ever-evolving world of programming. </p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaLinkedin size={30} className='hover:text-emerald-400 cursor-pointer' />
                <FaGithub size={30} className='hover:text-emerald-400 cursor-pointer' />
                <FaInstagram size={30} className='hover:text-emerald-400 cursor-pointer' />
                <FaTwitter size={30} className='hover:text-emerald-400 cursor-pointer' />
                <FaDribbble size={30} className='hover:text-emerald-400 cursor-pointer' /> 
            </div>
        </div> 
        <div className='lg:col-span-2 flex justify-evenly mt-6'>
            <div>
                <h6 className='font-medium text-emerald-300'> Explore </h6>
                <ul className='cursor-pointer'>
                    <li className='py-2 text-sm hover:text-emerald-400'> Home </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> About </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> Resources </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> Q&A </li>
                </ul>    
            </div>

            <div>
                <h6 className='font-medium text-emerald-300'> Socials </h6>
                <ul className='cursor-pointer'>
                    <li className='py-2 text-sm hover:text-emerald-400'> GitHub </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> LinkedIn </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> Instagram </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> Twitter </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> Dribble </li>
                </ul>    
            </div>    

            <div>
                <h6 className='font-medium text-emerald-300'> Guides </h6>
                <ul className='cursor-pointer'>
                    <li className='py-2 text-sm hover:text-emerald-400'> JavaScript </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> React </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> Frontend-Development </li>
                    <li className='py-2 text-sm hover:text-emerald-400'> Backend Development </li>
                </ul>    
            </div>        

            <div>
                <h6 className='font-medium text-emerald-300'> Contact </h6>
                <ul>
                    <li className='py-2 text-sm'> India, Mumbai </li>
                    <li className='py-2 text-sm'> buffercode@example.com </li>
                    <li className='py-2 text-sm'> +91 - 987654321 </li>
                    <li className='py-2 text-sm'> +91 - 912345678 </li>
                </ul>    
            </div>        
        </div>       
    </div>
  )
}

export default Footer;