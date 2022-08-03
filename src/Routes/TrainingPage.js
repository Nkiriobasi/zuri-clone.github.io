import React from 'react';
import Button from '../components/Button';

import Logo from '../assets/logo.svg';
import Thumbs from '../assets/thumbs.png';
import Lady1 from '../assets/lady1.jpeg';
import Line from '../assets/line.svg';
import Section1Wire from '../assets/section1wire.svg';
import Male1 from '../assets/male1.jpeg';

// import Ingresive from '../assets/ingresive.jpeg';

const TrainingPage = () => {
  return (
    <main className='training-page'>
      <header className='w-full py-3.5 md:px-8 px-6 my-3 fixed top-0 z-50'>
        <div className='header-container flex justify-between items-center'>
          <img src={Logo} alt="logo" className='cursor-pointer xl:w-72 md:w-56 sm:w-40 w-32' />

          <nav className='inline-flex items-center'>
            <li className='cursor-pointer list-none text-lg mr-8 py-1.5 px-2 font-normal lg:inline-flex hidden'>About</li>
            <li className='cursor-pointer list-none text-lg mr-8 py-1.5 px-2 font-normal lg:inline-flex hidden'>Why Us?</li>
            <li className='cursor-pointer list-none text-lg mr-8 py-1.5 px-2 font-normal lg:inline-flex hidden'>Stacks Covered</li>
            <li className='cursor-pointer list-none text-lg mr-24 py-1.5 px-2 font-normal lg:inline-flex hidden'>FAQs</li>
            <div className='cursor-pointer inline-flex items-center w-auto'>
              <img src={Thumbs} alt="thumbs icon" className='thumbs w-14 absolute' />
              <li className='bg cursor-pointer list-none text-lg py-2.5 md:px-8 px-5 font-normal inline-flex'>Enroll Now</li>
            </div>
          </nav>
        </div>
      </header>

      <section className="first-sec flex 2xl:px-0 px-8">
        <div className="first-sec-wrapper">
          <div className="first-sec-item1 w-3/12">
            <div>
              <img src={Lady1} alt="lady" />
            </div>
          </div>

          <div className="first-sec-item2 text-center w-6/12">
            <p className='first-red-text text-lg'>And now your search has ended...</p>
            <p className='first-bold-text pt-2.5 font-bold'>Gain knowledge to help you scale through the tech industry for free.</p>
            <div className='wire flex justify-end'>
              <img src={Line} alt="line" className='md:w-64 w-36' />
            </div>
            <p className='first-small-text pb-10 sm:text-lg text-base sm:mx-28'>A basic introduction to software development and product design aimed 
              at complete beginners, which anyone can join
            </p>
            <div className='w-full flex justify-center'>
              <Button />
            </div>
            <div className='mx-40 mt-4 justify-end h-auto sm:flex hidden'>
              <img src={Section1Wire} alt="section1wire" className='md:h-28 h-20'/>
            </div>
          </div>

          <div className="first-sec-item3 w-3/12">
            <div>
              <img src={Male1} alt="male" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrainingPage;