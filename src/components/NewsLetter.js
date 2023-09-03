import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Stay Ahead in Tech with Our Coding Tips Newsletter.
                </h1>
                <p>Sign up to our newletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter email' />
                    <button className='outline outline-emerald-500 w-[200px] rounded-md font-medium my-6 ml-4 py-3 hover:bg-emerald-500/10 hover:transition-all'> Notify me </button>
                </div>
            <p>Fostering your coding growth. Read our <span className='text-emerald-400'> Privacy Policy. </span> </p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;