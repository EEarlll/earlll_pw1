import React from 'react'
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaPython, FaCss3Alt, 
        FaReact, FaGitAlt, FaNpm,
        FaFacebook,FaYoutube,FaSpotify,
        FaWindows,FaTelegram, FaReddit,FaSteam,FaDiscord
       } from "react-icons/fa";
import { SiPytorch , SiJavascript, 
        SiTailwindcss, SiPypi, 
        SiVisualstudiocode,SiDropbox,
        SiAndroid,SiLeetcode,SiGoogle,
        } from "react-icons/si";
import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb";




function Carousel() {
  return (
    <div className='h-1/2 my-32'>
        <div className='font-primary  '>
            <h1 className='text-3xl md:text-5xl lg:text-7xl 
            text-center text-red1 mb-32'>Tech Things I used</h1>
            <div className='w-full h-[20vh]
                 overflow-hidden my-8'>

                <ul className='list-none h-full flex  items-center animate-scrolling '> 
                    <li><AiFillGithub             className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><AiFillHtml5              className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaPython                 className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiJavascript             className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaCss3Alt                className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaReact                  className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiPytorch                className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><TbBrandCSharp            className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiTailwindcss            className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><TbBrandCpp               className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaNpm                    className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaGitAlt                 className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiPypi                   className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiVisualstudiocode       className='dark:text-white text-black w-[20vw] h-24'/></li>

                    <li><AiFillGithub             className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><AiFillHtml5              className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaPython                 className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiJavascript             className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaCss3Alt                className='dark:text-white text-black w-[20vw] h-24'/></li>
                </ul> 
            </div>

            <div className='w-full h-[20vh]
                 overflow-hidden my-8'>

                <ul className='list-none h-full flex  items-center animate-scrolling2'> 
                    <li><SiDropbox        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaDiscord        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiAndroid        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiLeetcode       className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaFacebook       className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiGoogle         className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaYoutube        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaSpotify        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaWindows        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaSteam          className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaTelegram       className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaReddit         className='dark:text-white text-black w-[20vw] h-24'/></li>
                
                    <li><SiDropbox        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaDiscord        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiAndroid        className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><SiLeetcode       className='dark:text-white text-black w-[20vw] h-24'/></li>
                    <li><FaFacebook       className='dark:text-white text-black w-[20vw] h-24'/></li>
                </ul> 
            </div>
        </div>        
    </div>
  )
}

export default Carousel