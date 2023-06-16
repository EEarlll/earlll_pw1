import React , {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"


function Reveal({children}) {
    const ref = useRef(null);
    const isinView = useInView(ref, {margin: "-50% 0px -50% 0px"})
    const mainControls = useAnimation()

    useEffect(()=> {
        if(isinView){
            mainControls.start("visible")

        } else{
            mainControls.start("hidden")

        }
        
    }, [isinView, mainControls])

  return (
    <div ref= {ref}>

        <motion.div
        variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5, delay:0.25}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Reveal