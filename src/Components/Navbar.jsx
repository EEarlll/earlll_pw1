import React from 'react'



function Navbar() {
  return (
    <div className='absolute py-12 px-12'>
      <div className='justify-start items-center grow'>
        <svg className="w-16 h-16 text-red3" 
        fill="none" stroke="currentColor" 
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path 
        strokeLinecap="round" strokeLinejoin="round" 
        strokeWidth="2"
         d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
      </div> 
    </div>
  )
}

export default Navbar
