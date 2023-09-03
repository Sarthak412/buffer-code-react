import React from 'react';
import aboutImage from '../assets/about_2.png';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={aboutImage} alt='/' />
            <div className='flex flex-col justify-center'>
                <p className='text-emerald-500 uppercase font-bold'> Thrive through Code </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Unlock Potential with Code </h1>
                <p> 
                    Learning to code and develop offers a multitude of benefits. 
                    It enhances problem-solving skills, fosters creativity, and 
                    empowers you to shape the digital world. Through coding, you 
                    gain the ability to automate tasks, create innovative solutions, 
                    and embark on a rewarding career path in the rapidly evolving 
                    tech industry. It's a skill that not only amplifies your personal
                    capabilities but also drives progress and innovation in the modern 
                    world. 
                </p>
                <button className='outline outline-emerald-500 w-[200px] text-emerald-500 rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-black hover:text-emerald-400 hover:outline hover:outline-black hover:transition-all hover:duration-400 hover:ease-in-out'> Get Started </button>
            </div>
        </div>
    </div>
  )
}

export default About;