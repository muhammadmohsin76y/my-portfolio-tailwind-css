import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id ="hero" className='min-h-screen  bg-no-repeat bg-[url(/my.png)] left-100bg-cover'
    style ={{backgroundSize:"25%",backgroundPosition:"left 100px top 100px"}}>
       
       <Navbar />
       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'> 
      <div className='hidden lg:block'></div>
      <div  className='text-[80px] sm:text-[100] font-bold leading-tight flex justify-center items-center'>
    <div>
        <p>welcome</p>
        <p>To </p>
        <p>My portfolio</p>
    </div>
      </div>
      
       </div>
    </div>
  )
}

export default Hero
