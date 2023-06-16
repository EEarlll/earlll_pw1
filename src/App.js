import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Projects from "./Components/Projects";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Footer from "./Components/Footer";
import {motion} from "framer-motion"
import FireCursor from "./Components/FireCursor";
import Reveal from "./Components/Reveal";

function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {" "}
      <div className="flex justify-end pt-12 px-12 sticky top-0 right-0">
        <motion.button
          type="button"
          onClick={openModal}
          className="bg-red1
          text-white rounded-full
          w-16 h-16"
          whileTap={{scale:0.9}}
          whileHover={{scale:1.1}}

        >
          <svg
            fill="none"
            className="w-12 h-12 mx-auto my-auto dark:text-white
             text-black animate-pulse"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            ></path>
          </svg>
        </motion.button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 dark:bg-black bg-white bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto bg-transparent backdrop-blur-[2px]">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full dark:bg-[#262626] bg-[#e5e5e5] 
                max-w-md lg:min-w-[1240px] lg:h-[680px] transform md:min-w-[800px] md:min-h-[680px]
                overflow-hidden rounded-2xl p-6 min-h-[360px] flex flex-col justify-center items-center h-full
                text-center align-middle shadow-xl transition-all"
                >
                  <div className="">
                    <ul
                      className="dark:text-[#a3a3a3] text-[#525252] list-none
                    font-primary text-5xl md:text-7xl lg:text-8xl "
                    >
                      <li className="pt-4  dark:hover:text-white hover:text-black cursor-pointer">
                        About
                      </li>
                      <li className="pt-4  dark:hover:text-white hover:text-black cursor-pointer">
                        Projects
                      </li>
                      <li className="pt-4  dark:hover:text-white hover:text-black cursor-pointer">
                        Design
                      </li>
                      <li className="pt-4  dark:hover:text-white hover:text-black cursor-pointer">
                        Contact
                      </li>
                      <li className="text-3xl md:text-5xl pt-4  dark:hover:text-white hover:text-black cursor-pointer">
                        Source code
                      </li>
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  const [dark, setDark] = useState(colorTheme === "light" ? true : false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleDark = (checked) => {
    setTheme(colorTheme);
    setDark(checked);
  };

  return (
    <div className="flex sticky pb-12 px-12 bottom-0 left-0 justify-start">
      <DarkModeSwitch
        className=""
        checked={dark}
        onChange={toggleDark}
        size={65}
      />
    </div>
  );
}

function App() {
  localStorage.theme = "dark"

  return (
    <div className="dark:bg-black bg-white flex flex-col
    
    ">
      <FireCursor/>
      

      <Navbar />
      <Reveal>
      </Reveal>
      <MyModal/>


      <Hero />
        
      <Projects />

      <Reveal>
        <Carousel />
      </Reveal>

      <Reveal>
        <About/>
      </Reveal>

      <Reveal>
        <Footer/>
      </Reveal>


      <DarkMode />
    </div>
  );
}

export default App;
