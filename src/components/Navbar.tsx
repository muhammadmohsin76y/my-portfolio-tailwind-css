"use client"; 
import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt8'>
      <div className='flex justify-between items-center'>
        <div className='text-corner text-4xl font-bold'>Muhammad Mohsin</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='meneuLink'><a href='#hero'>Home</a></li>
          <li className='meneuLink'><a href='#about'>Abouts</a></li>
          <li className='meneuLink'><a href='#projects'>Projects</a></li>
          <li className='meneuLink'><a href='#skills'>Skills</a></li>
          <li className='meneuLink'><a href='#contact'>Contact</a></li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <TiThMenu size={30}/> : <TiThMenu size={30} /> }
        </div>
      </div>
    </div>
  );
};
export default Navbar;