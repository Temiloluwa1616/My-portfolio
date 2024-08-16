import React from 'react';
import Temzy from '../assets/Temzy.jpg'

import { FaGithubAlt, FaLinkedin,  } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn, fadein} from '../variants'
import { Link } from 'react-scroll';


const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto mt-[2rem]'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
           variants={fadeIn('up', 0.3)} initial="hidden"
           whileInView={'show'}
           viewport={{once:false, amount: 0.7}}
           className='text-[55px] font-bold leading-[0.8] lg:text-[60px]'>Sulaiman <span>Temiloluwa</span></motion.h1>

          <motion.div 
          variants={fadeIn('up', 0.5)} initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount: 0.7}}className=' text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'><span className='text-white mr-4'>I am a</span>
          <TypeAnimation sequence={[
            'Developer',
            2000,
            'Designer',
            2000,


          ]} speed={50}
          repeat={Infinity}
          className='text-accent'
          wrapper='span'
          />
          
          </motion.div>
          <p className='lg:w-[40rem]'>Hi! I’m Sulaiman Temiloluwa, a developer and designer who loves creating websites and apps that are both easy to use and visually appealing. I enjoy combining creativity with technical skills to bring ideas to life, whether it’s through coding or design.</p>
<motion.div
variants={fadeIn('up', 0.7)} initial="hidden"
whileInView={'show'}
viewport={{once:false, amount: 0.7}} 
className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

<Link to='contact'
activeClass='active'
spy={true}
smooth={true}>
<button className='btn btn-lg'>Contact Me</button></Link>
  

  <a href= "#" className='text-gradient btn-link'>My Portfolio</a>
</motion.div>
{/* socials */}
<motion.div
variants={fadeIn('up', 1)} initial="hidden"
whileInView={'show'}

className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'>
  <a href='https://github.com/Temiloluwa1616' target='_blank' rel='noopener noreferrer'>
    <FaGithubAlt/>
  </a>
  <a href='https://www.linkedin.com/in/temiloluwa-sulaiman-58bb21282' target='_blank' rel='noopener noreferrer'>
  <FaLinkedin />
</a>

</motion.div>
          </div>
        {/* image */}
        <motion.div
        variants={fadeIn('down', 1)} initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount: 0.7}} >
  <img 
    src={Temzy} 
    className='rounded-[2rem]  border-4 border-gray-300 shadow-lg transform transition-transform duration-500 hover:scale-105'
  />
</motion.div>

      </div>
    </div>
  </section>;
};

export default Banner;
