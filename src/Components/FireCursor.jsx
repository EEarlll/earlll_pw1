import React, { useEffect, useRef, useState } from 'react'

const FireCursor = () => {
    const [cursorPos, setCursorPos] = useState({x:0, y:0}) 
    const blobref = useRef(null);

    const updateCursorPosition = (e) =>{
        setCursorPos({x: e.clientX, y:e.clientY})

        blobref.current.animate(
            {
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            },
            {duration :3000, fill: "forwards"}
        )
    }

    useEffect(()=>{
        document.addEventListener('mousemove', updateCursorPosition)
        

        return()=>{
            document.removeEventListener('mousemove', updateCursorPosition)
        }
    }, [])


    return(
            <div className='fixed w-screen h-screen pointer-events-none blur-[150px]' 
                onMouseMove={updateCursorPosition}>
                    {/* <div className='absolute w-3 h-3 rounded-[50%]
                    bg-red1 mix-blend-screen z-50
                    after:content-[""] after:absolute after:top-[-5px]
                    after:left-[-5px] after:right-[-5px] after:bottom-[-5px]
                    after:rounded-[50%] after:bg-red1 after:opacity-[0.5]
                    after:blur-md pointer-events-auto 
                    '
                    style={{left: cursorPos.x + 5, top: cursorPos.y + 10}}
                    ></div> */} 
                    <div className="bg-white h-[200px] aspect-square 
                    absolute left-1/2 top-1/2 -translate-x-1/2 
                    -translate-y-1/2 rounded-[50%] bg-gradient-to-r
                     dark:from-[#fafafa] dark:to-[#d4d4d8] 
                     -z-50  from-[#424249] to-[#000000]"
                     
                    ref={blobref}
                    style={{left: cursorPos.x, top: cursorPos.y}}
                    >

                    </div>
            </div>        

    )
}
export default FireCursor
