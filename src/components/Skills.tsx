

import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
    <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-4xl md:text-5xl'>technologies i work with</h2><br></br>
        <p className="text-grey-500 pt-3"> I have good experties in HTML,CSS,JAVASCRIPT
       </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className= 'space-y-2'>
                <h2> TYPESCRIPT</h2>
                <h2> REACTJS</h2>
                <h2>NEXTJS</h2>
            </div>
            <div className= 'space-y-2'>
                <h2>TAILWIND </h2>
                <h2> CSS</h2>
                <h2> NODEJS</h2>
            </div>
              </div>
      </div>
    </div>
    </div>
    )}
      
      

export default Skills;
