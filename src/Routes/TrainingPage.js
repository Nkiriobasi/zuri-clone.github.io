import React from 'react';
import Button from '../components/Button';

import Logo from '../assets/logo.svg';
import Thumbs from '../assets/thumbs.png';
import Lady1 from '../assets/lady1.jpeg';
import Line from '../assets/line.svg';
import Section1Wire from '../assets/section1wire.svg';
import Male1 from '../assets/male1.jpeg';
import Ingresive from '../assets/ingresive.jpeg';
import Section3Wire from '../assets/section3wire.svg';
import Star from '../assets/Star.jpeg';
import curve1 from '../assets/curve1.png';
import curve2 from '../assets/curve2.svg';
import curve3 from '../assets/curve3.svg';
import curve4 from '../assets/curve4.svg';
import curve5 from '../assets/curve5.svg';
import curve6 from '../assets/curve6.svg';


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
        <div className="first-sec-wrapper container">
          <div className="first-sec-item1 w-3/12">
            <div>
              <img src={Lady1} alt="lady" />
            </div>
          </div>

          <div className="first-sec-item2 text-center w-6/12">
            <p className='red-text text-lg'>And now your search has ended...</p>
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


      <section className="flex h-auto 2xl:px-0 px-8" id="about">
        <div className="container pt-12">
        <hr className='hr-line' />
        <div className="second-sec-wrapper flex items-center justify-center">
          <div className="second-sec-items w-1/3">
            <div className=''>
              <p className="second-sec-p-bold-text lg:text-2xl text-xl font-bold uppercase">Ingressive for Good was launched in July 2020 with No dollar in donation...</p>
            </div>
          </div>

          <div className="second-sec-items w-1/3">
            <div className="flex justify-center">
              <img src={Ingresive} alt="ingresive logo" className='xl:w-72 w-56' />
            </div>
          </div>

          <div className="second-sec-items w-1/3">
            <p className="second-sec-p-light-text xl:text-2xl lg:text-xl lg text-right">to help increase the earning power of African youths by providing them with tech 
              skills, community, tools, resources, and jobs... <span className="green-text underline cursor-pointer">Read More</span>
            </p>
          </div>
        </div>
        <hr className='hr-line' />
        </div>
      </section>


      <section className="h-auto flex 2xl:px-0 px-8" id="why-us">
        <div className="third-sec-wrapper container pt-12 flex items-end justify-between">
          <div className='third-sec-col max-w-3xl'>
            <div className='flex justify-center items-center'>
              <img src={Section3Wire} alt="section3wire" className='section3wire' />
            </div>
            <div>
              <p className='third-sec-sm-text red-text text-2xl'>Why Zuri Training</p>
              <p className='third-sec-bold-text font-bold'>Here at Zuri, you gain access to enough 
                knowledge to introduce and aid your success in the tech industry.
              </p>
            </div>
          </div>

          <div className='w-full h-72 flex justify-center items-end'>
            <div className='mb-5'>
              <img src={Star} alt="star" className='star' />
            </div>
          </div>
        </div>
      </section>


      <section className="fourth-sec flex h-auto 2xl:px-0 px-8">
        <div className="fourth-sec-wrapper container pt-12">
          <div className="fs-box-wrap fs-box-wrap-bg 2xl:basis-1/3 grow-0 pt-6 pl-6">
            <div className="fs-box1 relative">
              <img src={curve1} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">01</p>
              <p className="text-4xl pt-8 pb-9 font-bold">Fully <br /> Remote</p>
              <p className="text-lg font-normal">100% online classes available to anyone in the world.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 grow-0 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve2} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">02</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">Hands-On <br /> Experience</p>
              <p className="fs-box-text text-lg font-normal">We don't just teach you theory, we show you how to build things.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 grow-0 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve3} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">03</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">Collaborative <br /> Learning</p>
              <p className="fs-box-text text-lg font-normal">We connect you with like minds to grow together.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 grow-0 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve4} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">04</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">Real-life <br /> Projects</p>
              <p className="fs-box-text text-lg font-normal">We give CV worthy projects to help you hit the ground running.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 grow-0 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve5} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">05</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">Beginner <br /> Friendly</p>
              <p className="fs-box-text text-lg font-normal">We provide step-by-step procedures on how to get things done.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 grow-0 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve6} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">06</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">In-Program <br /> Mentorship</p>
              <p className="fs-box-text text-lg font-normal">During and after the program you have access to experience seniors.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrainingPage;