import React from 'react'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div className='border-t flex flex-col font-primary min-h-[900px]'>
        <div className='flex flex-col justify-center items-center my-auto'>
            <h1 className='dark:text-white text-black
            text-5xl md:text-8xl lg:text-9xl mx-4 
            '>Do you need me?</h1>

            <motion.button type="button" 
            className="bg-red1 dark:text-white text-black leading-loose
            rounded-full text-xl md:text-2xl lg:text-4x mt-16 p-5 font-secondary"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            >Contact me
            </motion.button>

        </div>
        <div className='bg-red1 rounded-full z-[999]  ml-auto mx-12 -my-16 hover:animate-bounce'>
                <div>
                <svg fill="none"
                    className='dark:text-white 
                    w-16 h-16 p-4 text-black cursor-pointer '
                    stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"></path>
                    </svg>
                </div>

            </div>
{/* 
        <div className='justify-end flex ml-auto px-12 -my-16'>
            <div className='bg-red1 rounded-full'>

            </div>
        </div> */}
    </div>

  )
}

export default Footer