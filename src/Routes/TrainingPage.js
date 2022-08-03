import React from 'react';

import Logo from '../assets/logo.svg';
import Thumbs from '../assets/thumbs.png';
// import Ingresive from '../assets/ingresive.jpeg';

const TrainingPage = () => {
  return (
    <main className='training-page'>
      <header className='w-full py-3.5 md:px-8 px-6 my-3'>
        <div className='header-container flex justify-between items-center'>
          <img src={Logo} alt="logo" className='cursor-pointer xl:w-72 md:w-56 sm:w-40 w-32' />

          <nav className='inline-flex items-center'>
            <li className='cursor-pointer list-none text-lg mr-8 py-1.5 px-2 font-normal lg:inline-flex hidden'>About</li>
            <li className='cursor-pointer list-none text-lg mr-8 py-1.5 px-2 font-normal lg:inline-flex hidden'>Why Us?</li>
            <li className='cursor-pointer list-none text-lg mr-8 py-1.5 px-2 font-normal lg:inline-flex hidden'>Stacks Covered</li>
            <li className='cursor-pointer list-none text-lg mr-24 py-1.5 px-2 font-normal lg:inline-flex hidden'>FAQs</li>
            <div className='inline-flex items-center w-auto'>
              <img src={Thumbs} alt="thumbs icon" className='thumbs w-14 absolute' />
              <li className='bg cursor-pointer list-none text-lg py-2.5 md:px-8 px-5 font-normal inline-flex'>Enroll Now</li>
            </div>
          </nav>
        </div>
      </header>
    </main>
  );
}

export default TrainingPage;