import React from 'react'
import {motion} from 'framer-motion'
import imagesTrack from '../Assets/Images/imagesTrack'

function About() {

    
  return (
    <div className='font-primary flex flex-col min-h-[600px] mx-4 my-4'>
                    <h1 className='text-red1 
                    text-3xl md:text-5xl lg:text-7xl 
                    max-w-[14ch] mx-auto text-center'>
                    design, technology, and innovation. </h1>

        <div className='flex flex-col  items-center 
        overflow-hidden lg:mx-[20%]'>

            <motion.div className='cursor-grab '>
                <motion.div 
                drag="x" dragConstraints={{right:1820 , left:-1921}}
                whileTap={{cursor:"grabbing"}}
                className='flex '>
                    {imagesTrack.map(image => {
                        return(
                            <motion.div key={image} className='min-w-[600px] p-4'>
                                
                                <img src={image} alt="" 
                                className='h-96 w-full 
                                rounded-lg mx-auto object-cover 
                                object-center pointer-events-none'/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
        <div className='justify-center items-center flex flex-col'>
                <p className='dark:text-white text-black 
                    text-xl md:text-2xl lg:text-3xl 
                    leading-loose
                     text-center lg:w-1/2
                    tracking-wide'>
                    An intersection of some interests. The purpose of this website is to share my work, ideas, and progress.</p>
            </div>
    </div>
  )
}

export default About