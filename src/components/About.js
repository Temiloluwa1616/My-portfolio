import React from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {

  return <section id='about' className='section lg:mt-[6rem]'>
    <div className='container mx-auto'>
      <div className='lg:flex flex-row lg:items-center
      h-screen'>
        {/* img */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className='flex-1 bg-backdrop bg-contain bg-no-repeat h-[200px] lg:h-[300px] mix-blend-lighten bg-top'></motion.div>
        {/* text */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}className='flex-1'>
          <h2 className='h2 text-accent'>About Me</h2>
          <h3 className='h3 mb-2'>I'm a Freelance Front End Developer with 3 Years of Experience</h3>
          <p>Hi! I’m Sulaiman Temiloluwa, a developer and designer who loves creating websites and apps that are both easy to use and visually appealing. I enjoy combining creativity with technical skills to bring ideas to life, whether it’s through coding or design.

I focus on making sure that the things I build not only work well but also look great. I’m always learning new ways to improve and keep up with the latest trends, so I can bring fresh ideas to every project I work on.

In short, I’m passionate about building cool stuff that people love to use!</p>
<div className='flex gap-x-8 items-center'>

<Link
to='contact'
activeClass='active'
spy={true}
smooth={true}>
<button className='btn btn-lg'>Contact me</button></Link>



  <a href='#' className='text-gradient btn-link'>my Portfolio</a>
</div>
        </motion.div>

        
      </div>
    </div>
  </section>;
};

export default About;
