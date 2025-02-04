import React from 'react';
import { BsArrowUpSquareFill } from "react-icons/bs";
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';

const services = [
  {
    name: 'FrontEnd Developer',
    description: 'I specialize in crafting visually engaging and responsive websites that provide seamless user experiences. With expertise in HTML, CSS, and JavaScript, I bring designs to life, ensuring that every project is not only aesthetically pleasing but also fast, accessible, and easy to use.',
    link: 'Learn More'
  },
  {
    name: 'Mobile Development',
    description: 'I create intuitive and responsive mobile applications designed to enhance user experience across devices.',
    link: 'Learn More'
  },
  {
    name: 'Designer',
    description: 'I design clean, user-centric interfaces that align with your brand and engage your audience effectively.',
    link: 'Learn More'
  }
]


const Services = () => {
  return <section id='services' className='section '>
    <div className='container mx-auto mt-[20rem] lg:mt-[5rem]'>
      <div className='flex flex-col  lg:flex-row '>
        {/* text */}

        <motion.div
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount: 0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12  lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>
            What I Do.
          </h2>

          <h3 className='h3 max-w-[455px] mb-16'>
          Crafting Digital Experiences through Web, Mobile, and Design
          </h3>

          <Link 
          to='work'
          activeClass='active'
          spy={true}
          smooth={true}>
          <button className='btn btn-sm'>See My Work</button>
          </Link>
          

        </motion.div>

        <motion.div
         variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount: 0.3}}className='flex-1'>
          {/* services */}

          <div>
            {services.map((service,index)=>{
              const {name, description,link} = service
              return(
                <div className='border-b border-white/20 h-[15rem] mb-[6rem] flex lg:mb-0 lg:h-[176px]' key={index}>
                 <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                 </div>
                 <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpSquareFill/>
                  </a>
                  <a href='#' className='text-gradient text-sm'>{link}</a>
                 </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>

    </div>
  </section>;
};

export default Services;
