import React from 'react';
import Logo from '../assets/logo.svg'


const Header = () => {
  return <header className='bg-pink-300 py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
       <a href='#'>
        <h1 className='h2 text-accent font-bold'>Sulaiman <br/> <span className='text-white'>Temiloluwa</span></h1>
       </a>
       <button className='btn btn-sm'>Work With Me</button>
      </div>
    </div>
  </header>;
};

export default Header;
