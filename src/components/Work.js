import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Qrc from '../assets/Qrc.png'
import mono from '../assets/mono.png'
import monot from '../assets/monot.png'
import farm from '../assets/Farmeely.png'

const Work = () => {
  return <section id='work' className='section'>
    <div className='container mx-auto lg:mt-[20rem]'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
      <motion.div
       variants={fadeIn('right', 0.5)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount: 0.3}}
      className='flex-1 flex flex-col mb-10 lg:mb-0'>
        <div>
          <h2 className='h2 leading-tight text-accent'>My Latest <br/> Work.</h2>

          <p className='max-w-sm mb-16'>Showcasing my recent projects in web development, mobile apps, and design.</p>
          <button className='btn btn-sm mb-6'>View Projects</button>


          <div className='flex flex-col  gap-y-6'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full z-40 absolute transition-all duration-300'></div>
            <img src={Qrc} className='group-hover:scale-125 transition-all duration-500'/>

            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
             <span className='text-gradient'>Qr Code Generator</span> </div>
            {/* title */}
            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full z-40 absolute transition-all duration-300'></div>
            <img src={mono} className='group-hover:scale-125 transition-all duration-500'/>

            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
             <span className='text-gradient'>Mono</span> </div>
            {/* title */}
            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
          
          </div>
          {/* image */}
          
          
        </div>
     
       
      </motion.div>

      <motion.div
       variants={fadeIn('left', 0.5)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount: 0.3}}
      className='flex-1 flex flex-col gap-y-10'>
      <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full z-40 absolute transition-all duration-300'></div>
            <img src={monot} className='group-hover:scale-125 transition-all duration-500'/>

            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
             <span className='text-gradient'>Mono</span> </div>
            {/* title */}
            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
      <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full z-40 absolute transition-all duration-300'></div>
            <img src={farm} className='group-hover:scale-125 transition-all duration-500'/>

            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
             <span className='text-gradient'>Farmeely</span> </div>
            {/* title */}
            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
