import React from 'react'
import img from '../Assets/Images/luca-bravo-XJXWbfSo2f0-unsplash.jpg'
import Reveal from './Reveal';

const GridP = ({ order }) => {

    return (
      
      <div className='grid grid-cols-1
        lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 
        lg:py-24 lg:px-28 my-32'>
        <div className={`flex w-full px-4 ${order === 'first' ? 'lg:order-first' : 'lg:order-last'}`}>
          <img
            src={img}
            alt=""
            className='h-auto max-w-full 
            rounded-lg mx-auto shadow-none
             transition-shadow duration-300 
             ease-in-out hover:shadow-xl
              hover:shadow-black dark:hover:shadow-red1'
            width="650"
            height="400"
          />
        </div>
        <div className='dark:text-white
         text-black w-full
          px-4 text-xl md:text-2xl lg:text-3xl
           leading-loose lg:text-left pt-16 lg:w-10/12
            text-center tracking-wide min-w-full
            
            lg:after:bg-gradient-to-b after:from-transparent after:via-red1
            after:to-transparent after:h-[100px] after:w-[1px] after:absolute
            after:left-[-1px] after:top-[65%] after:content-[""]
            after:opacity-0 customt 
            transition-all
            relative 
            hover:after:top-[5%] hover:after:opacity-[1]
            '
            >
          <h1 className='text-red1 
          text-3xl md:text-5xl lg:text-7xl pb-4
          
          '>Lorem Ipsum Dolor</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora exercitationem quibusdam labore voluptatem, natus rem molestiae dignissimos, blanditiis dolores atque aliquid, ipsa totam animi repudiandae. Consequuntur laboriosam alias voluptatem! Consequatur.
          </p>
        </div>
      </div>
    );
  };
  

function Projects() {

  return (
    <div className='flex flex-col font-primary border'>
        <Reveal>
        <div className='flex flex-col  
        min-h-[800px] justify-center items-center py-16'>
            
              <h1 className='text-red1
                  text-3xl md:text-5xl lg:text-7xl 
                   text-center py-16 mx-auto'>
                  My Projects</h1>
            
              <div className='flex w-full overflow-hidden px-4'>
                  

                  
                  <img src={img} alt="" className='
                  h-auto 
                  max-w-full rounded-lg mx-auto 
                  shadow-none transition-shadow 
                  duration-300 ease-in-out 
                  hover:shadow-xl hover:shadow-black
                  dark:hover:shadow-red1 my-4' 
                  width="650" height="400"/>
  
              </div>

              <div className='dark:text-white text-black w-full px-4
                  text-xl md:text-2xl lg:text-3xl leading-loose
                  text-center pt-16 lg:w-1/2
                  tracking-wide 
              '> 
                  <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora exercitationem quibusdam labore voluptatem, natus rem molestiae dignissimos, blanditiis dolores atque aliquid, ipsa totam animi repudiandae. Consequuntur laboriosam alias voluptatem! Consequatur."</p>
                
              </div>
            
        </div>
        </Reveal>
        
        <Reveal>
          <GridP order={"first"}/>
        </Reveal>
        <Reveal>
          <GridP order={""}/>
        </Reveal>
        <Reveal>
          <GridP order={"first"}/>
        </Reveal>
        <Reveal>
          <GridP order={""}/>
        </Reveal>
        <Reveal>
          <GridP order={"first"}/>
        </Reveal>
    </div>
  )
}

export default Projects