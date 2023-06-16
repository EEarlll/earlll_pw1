import React, { useEffect,useRef } from 'react'
import {motion, useInView} from "framer-motion"

function Hero() {
    const letters = "abcdEfghijklmnopqrstuvwxyz";
    let interval = null
    const ref = useRef(null);
    const h1Ref1 = useRef(null);
    const h1Ref2 = useRef(null);
    const isinView = useInView(ref, {margin: "-50% 0px -50% 0px"})

    useEffect(()=>{
        const h1Element = document.querySelector("h1")
        h1Element.addEventListener("mouseover", handleMouseOver)

        return() =>{
            h1Element.removeEventListener("mouseover", handleMouseOver)
            clearInterval(interval)
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        const event = new MouseEvent("mouseover");
      
        if (h1Ref1.current) {
          h1Ref1.current.dispatchEvent(event);
        }
      
        if (h1Ref2.current) {
          h1Ref2.current.dispatchEvent(event);
        }
      }, [isinView]);
      


    const handleMouseOver = (e) =>{
        let iteration = 0;
        clearInterval(interval)

        interval = setInterval(() => {
            e.target.innerText = e.target.innerText.split("").map(
                (letter,index) =>{
                    if(index < iteration ){
                        return e.target.dataset.value[index]
                    }
                    return letters[Math.floor(Math.random() * 26)]
                }
            ).join("")
            
            if(iteration >= e.target.dataset.value.length){
                clearInterval(interval)
            }
            iteration += 1/3

        }, 30);
    }


  return (

    <div className='flex min-h-screen'>
        <div className='ml-[13%] flex flex-col justify-center items-start px-4'>
            <motion.div className='' ref={ref}>
                <h1 className='font-primary dark:text-white inline
                text-5xl md:text-8xl lg:text-9xl  text-black'
                ref={h1Ref1} 
                onMouseOver={handleMouseOver} data-value="Earlvin">
                    Earlvin</h1>
                    
                <h1 className='font-primary dark:text-white 
                text-5xl md:text-8xl lg:text-9xl  text-black' 
                ref={h1Ref2}
                onMouseOver={handleMouseOver} data-value="Eustacio">
                Eustacio</h1>
                
            </motion.div>
            
            <div className='bg-red1 rounded-full hover:animate-bounce'>
                <svg fill="none" className='dark:text-white 
                w-16 h-16 p-4 text-black cursor-pointer'
                stroke="currentColor" 
                strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path>
                </svg>
            </div>

        </div>
    </div>
  )
}

export default Hero