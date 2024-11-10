import React from 'react'
interface PropsTypes {
    title: string;
    
}
const headings: React.FC<PropsTypes>= ({title}) => {
  return (
    <div className='text-center text-2xl pb-8'>
    <p  className='border-b-4 inline-block pb-2'>{title} </p>  
    </div>
  )
}

export default headings
