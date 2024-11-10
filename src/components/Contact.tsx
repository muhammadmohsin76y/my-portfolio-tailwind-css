import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id='contact' className=' pt-32 container'>
       <div className='grid md:grid-cols-2 gap-10 items-center'>
       <div className='space-y-8'>
          <h2 className='text-5xl '>Get in touch</h2>
       <p className='text-grey-600 text-[18px] pt-2'>
        feel free to contact me anytimes
       </p>
       <div className='flex gap-3 items-center'>
        <MdOutlineMail size={30}/>muhammadmohsin76y@gmail.com
       </div>
       <div className='flex gap-3 items-center'>
        <BsFillTelephoneFill size={30}/>03353560347
       </div>
        </div>
        <div className='space-y-8'>
        <div className='flex flex-col gap-1 '>
         <label htmlFor='name'>Name</label>
          <input type="text"
          className='h-[40px]bg-transparent border border-accent'
          id='name'/>
         </div>
         <div className='flex flex-col gap-1 '>
         <label htmlFor='email'>Email</label>
          <input type="text"
          className='h-[40px]bg-transparent border border-accent'
          id='email'/>
         </div>
         <div className='flex flex-col gap-1 '>
         <label htmlFor='msg'>Message</label>
         <textarea
         className='h-[40px]bg-transparent border border-accent'
         id='msg' rows={8}>
          </textarea> 
         </div>
         <button className='bg-accent p-2 px-6'>Send</button>
         
        </div>
       </div>
    </div>
  )
}

export default Contact
