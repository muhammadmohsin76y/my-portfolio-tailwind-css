import React from 'react';
import Card from './Card';
import Heading from './Heading';

const data = [
  {
    id: 0,
    title: "Calculator",
    desc: "This is a calculator project using HTML, CSS, and JavaScript",
    img: "/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 1,
    title: "Currency Converter",
    desc: "This is a currency converter project using HTML, CSS, and JavaScript",
    img: "/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Periodic Table",
    desc: "This is a periodic table project using HTML and CSS",
    img: "/project3.png",
    tags: ["HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;