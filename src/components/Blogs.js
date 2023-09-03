import React from 'react'

import card1 from '../assets/card_1.png'
import card2 from '../assets/card_2.png'
import card3 from '../assets/card_3.png'

const Blogs = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {/* Blog card 1 */}
            <div className='w-full border shadow rounded-lg flex flex-col p-4 my-4 hover:scale-105 hover:duration-300 hover:shadow-md hover:bg-emerald-100'>
                <img src={card1} className='w-40 mx-auto mt-[-3rem] bg-transparent' alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'> AI Revolution: From Sci-Fi to Reality </h2>
                <p className='text-left pb-5 mx-4'> AI, or Artificial Intelligence, is the technology that enables machines to mimic human intelligence, making them capable of learning, reasoning, and problem-solving. It's revolutionizing industries and enhancing automation, decision-making, and data analysis in diverse fields, from healthcare and finance to entertainment and transportation. </p>
                <button className='p-2 bg-emerald-600 text-white rounded-md w-fit mx-auto hover:bg-emerald-500/10'> Read more </button>
            </div>

            {/* Blog card 2 */}
            <div className='w-full border shadow rounded-lg flex flex-col p-4 md:my-0 my-8 hover:scale-105 hover:duration-300 hover:shadow-md hover:bg-emerald-100'>
                <img src={card2} className='w-40 mx-auto mt-[-3rem] bg-transparent' alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'> Programming Prowess: Tips for Aspiring Developers </h2>
                <p className='text-left pb-5 mx-4'> For programmers, a few invaluable tips can make a world of difference. Firstly, embrace continuous learning, as technology is always evolving. Secondly, practice coding regularly by working on real-world projects to reinforce your skills. Lastly, stay persistent in the face of challenges, as programming often involves solving complex problems that require patience and determination to overcome. </p>
                <button className='p-2 bg-emerald-600 text-white rounded-md w-fit mx-auto hover:bg-emerald-500'> Read more </button>
            </div>

            {/* Blog card 3 */}
            <div className='w-full border shadow rounded-lg flex flex-col p-4 my-4 hover:scale-105 hover:duration-300 hover:shadow-md hover:bg-emerald-100'>
                <img src={card3} className='w-40 mx-auto mt-[-3rem] bg-transparent' alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'> The Power of Testing Tools </h2>
                <p className='text-left pb-5 mx-4'> AI, or Artificial Intelligence, is the technology that enables machines to mimic human intelligence, making them capable of learning, reasoning, and problem-solving. It's revolutionizing industries and enhancing automation, decision-making, and data analysis in diverse fields, from healthcare and finance to entertainment and transportation. </p>
                <button className='p-2 bg-emerald-600 text-white rounded-md w-fit mx-auto hover:bg-emerald-500'> Read more </button>
            </div>
        </div>    
    </div>
  )
}

export default Blogs;