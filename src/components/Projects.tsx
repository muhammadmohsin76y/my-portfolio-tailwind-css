import React from 'react'
import Card from './Card';
import Heading from './Heading';
import { title } from 'process';
const data = [
  {
    id:0,
    title:"Calculator",
    desc:"This is a calculator project using html,css and javascript",
    img:"/project1.png",
    tags:["html,css,js"],
  },
  {
    id:1,
    title:"project2",
    img:"/project2.png",
    desc:"This is a currency convertor project using html,css and javascript,",
    tags:["html,css,js"],

  },
  {
    id:2,
    title:"project3",
    img:"/project3.png",
    desc:"This is a priodic table project using html and css",
    tags:["html,css"],
  },
  ] 

const projects = () => {
  return (
    <div id='projects' className='container pt 32'>
     <Heading title='My Projects'/>
     <div className='grid gap-10xl:gap-1 xl;gap-y-10 md: grid-cols-3 lg:grid-cols-3 place-iteams-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
        </div> 
    </div>
  )
}

export default projects
