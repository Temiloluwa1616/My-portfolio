import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import { FaBriefcase } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";


import { Link } from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-1 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>

      <div className='w-full  h-[70px] bg-black/20 backdrop-blur-2xl rounded-full max-w-[900px] mx-auto px-5 flex justify-between text-white/50 lg:w-[20rem]'>
        <Link 
        to='home' 
        activeClass='active'
        spy={true}
        offset={-200}
        smooth={true} 
        className='cursor-r w-[60px] h-[60px] flex items-center justify-center'>
        <BiHomeAlt/>
        </Link>

        <Link to='about' 
        activeClass='active'
        spy={true}
        smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiUser/>
        </Link>

        <Link to='services' 
        activeClass='active'
        spy={true}
        smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <FaBriefcase/>
        </Link>

        <Link to='work' 
        activeClass='active'
        spy={true}
        smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsClipboardDataFill/>
        </Link>

        <Link to='contact' 
        activeClass='active'
        spy={true}
        smooth={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <IoIosContact/>
        </Link>
        
      </div>
    </div>
  </nav>;
};

export default Nav;
