import React from 'react';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDotCircle } from '@fortawesome/free-solid-svg-icons';

import Logo from '../assets/logo.svg';
import Thumbs from '../assets/thumbs.png';
import Lady1 from '../assets/lady1.jpeg';
import Line from '../assets/line.svg';
import Section1Wire from '../assets/section1wire.svg';
import Male1 from '../assets/male1.jpeg';
import Ingresive from '../assets/ingresive.jpeg';
import Section3Wire from '../assets/section3wire.svg';
import Section5Wire from '../assets/section5wire.svg';
import Section7Wire from '../assets/section7wire.svg';
import Star from '../assets/Star.jpeg';
import curve1 from '../assets/curve1.png';
import curve2 from '../assets/curve2.svg';
import curve3 from '../assets/curve3.svg';
import curve4 from '../assets/curve4.svg';
import curve5 from '../assets/curve5.svg';
import curve6 from '../assets/curve6.svg';
import Section5Img from '../assets/section5-image.png';
import dotsection5 from '../assets/dotsection5.svg';
import hand from '../assets/hand.svg';
import mentor from '../assets/mentor.svg';
import practice from '../assets/practice.svg';
import games from '../assets/games.svg';
import section6 from '../assets/section6.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import javascript from '../assets/javascript.svg';
import php from '../assets/php.svg';
import python from '../assets/python.svg';
import adobeXd from '../assets/adobeXd.svg';
import figma from '../assets/Figma.svg';
import ubuntu from '../assets/Ubuntu.svg';
import bash from '../assets/bash.svg';
import aws from '../assets/aws.svg';
import laravel from '../assets/Laravel.svg';
import react from '../assets/React.svg';
import django from '../assets/Django.svg';
import twitter from '../assets/twitter.svg';
import star1 from '../assets/Star1.svg';
import move from '../assets/move.svg';
import clarity from '../assets/clarity.svg';
// import hour from '../assets/hour.png';
// import time from '../assets/time.png';
import circle from '../assets/circle.png';
import round from '../assets/round.svg';
import mains from '../assets/mains.png';
import curve from '../assets/curve.svg';
import youtube from '../assets/youtube.svg';
import linkd from '../assets/linkd.svg';
import facebook from '../assets/facebook.svg';



const TrainingPage = () => {
  return (
    <main className='training-page'>
      <div>
        <header className='header h-24 flex w-full fixed top-0 z-10 py-3.5 md:px-8 px-6'>
          <div className='header-container w-full flex flex-row justify-between items-center'>
            <img src={Logo} alt="logo" className='cursor-pointer xl:w-72 md:w-56 sm:w-40 w-32' />

            <nav className='flex items-center'>
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
      </div>


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
        <div className="flex items-center justify-center container pt-12 flex-wrap max-w-full">
          <div className="fs-box-wrap fs-box-wrap-bg 2xl:basis-1/3 w-1/3 pt-6 pl-6">
            <div className="fs-box1 relative">
              <img src={curve1} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">01</p>
              <p className="text-4xl pt-8 pb-9 font-bold">Fully <br /> Remote</p>
              <p className="text-lg font-normal">100% online classes available to anyone in the world.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 w-1/3 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve2} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">02</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">Hands-On <br /> Experience</p>
              <p className="fs-box-text text-lg font-normal">We don't just teach you theory, we show you how to build things.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 w-1/3 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve3} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">03</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">Collaborative <br /> Learning</p>
              <p className="fs-box-text text-lg font-normal">We connect you with like minds to grow together.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 w-1/3 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve4} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">04</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">Real-life <br /> Projects</p>
              <p className="fs-box-text text-lg font-normal">We give CV worthy projects to help you hit the ground running.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 w-1/3 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve5} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">05</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">Beginner <br /> Friendly</p>
              <p className="fs-box-text text-lg font-normal">We provide step-by-step procedures on how to get things done.</p>
            </div>
          </div>

          <div className="fs-box-wrap 2xl:basis-1/3 w-1/3 pt-6 pl-6">
            <div className="fs-box2 relative">
              <img src={curve6} alt="curve" className="fs-box-img absolute right-0" />
              <p className="text-6xl font-bold">06</p>
              <p className="fs-box-text text-4xl pt-8 pb-9 font-medium">In-Program <br /> Mentorship</p>
              <p className="fs-box-text text-lg font-normal">During and after the program you have access to experience seniors.</p>
            </div>
          </div>
        </div>
      </section>


      <section className='fifth-sec mt-36' id="stacks-covered">
        <div className='container fifth-sec-wrapper pt-12 flex xl:flex-row flex-col xl:px-0 px-8'>
          <div className='xl:w-7/12 w-full text-white pt-6 pl-6'>
            <div className='flex justify-end items-center w-full'>
              <img src={Section5Wire} alt="img" className='section3wire mr-32' />
            </div>
            <p className='text-lg'>We will help you get started</p>
            <p className='xl:text-5xl text-3xl font-medium xl:w-4/5 w-full'>High quality training with hands-on practice</p>
            <p className='xl:pt-10 pt-9 xl:max-w-sm w-full text-lg'>We give you weekly tasks, ranging from easy to complex, as you progress from stage to stage 
              making it to the final stage means you are now ready to continue learning and growing independently.
            </p>
            <button className='py-2 px-7 fifth-sec-btn text-center justify-center inline-flex'>Enroll Now</button>
            <div className='grid grid-cols-2'>
              <div className='pt-6 pl-6 w-full'>
                <button className='w-60 flex items-center justify-start py-2.5 pr-12 pl-3.5 border-2 border-solid border-stone-50 rounded-3xl'>
                  <img src={hand} alt='hand img' className='pr-2 fifth-sec-btn-img' />
                  <p>Teamwork</p>
                </button>
              </div>
              <div className='pt-6 pl-6 w-full'>
                <button className='w-60 flex items-center justify-start py-2.5 pr-12 pl-3.5 border-2 border-solid border-white rounded-3xl'>
                  <img src={mentor} alt='mentor img' className='pr-2 fifth-sec-btn-img' />
                  <p>Mentorship</p>
                </button>
              </div>
              <div className='pt-6 pl-6 w-full'>
                <button className='w-60 flex items-center justify-start py-2.5 pr-12 pl-3.5 border-2 border-solid border-white rounded-3xl'>
                  <img src={practice} alt='practice img' className='pr-2 fifth-sec-btn-img' />
                  <p>practice</p>
                </button>
              </div>
              <div className='pt-6 pl-6 w-full'>
                <button className='w-60 flex items-center justify-start py-2.5 pr-12 pl-3.5 border-2 border-solid border-white rounded-3xl'>
                  <img src={games} alt='games img' className='pr-2 fifth-sec-btn-img' />
                  <p>Fun & Games</p>
                </button>
              </div>
            </div>
          </div>

          <div className='max-w-full pt-6 pl-6'>
            <div>
              <img src={Section5Img} alt="img" className='inline-flex' />
            </div>
          </div>
        </div>

        <div className='max-w-full'>
          <img src={dotsection5} alt="img" className='p-9 inline-flex' />
        </div>
      </section>


      <section className='sixth-sec'>
        <div className='container pt-16 2xl:px-0 px-8'>
          <div className='flex'>
            <div className='w-1/2 pt-6 pl-6'>
              <div>
                <p className=' text-2xl red-text'>Scope Of Program</p>
                <p className='sixth-sec-bold-text text-5xl font-bold'>Here is the list of areas that will be explored in the training</p>
              </div>
            </div>
            <div className='w-1/2 pt-6 pl-6'></div>
          </div>

          <div className='flex w-full justify-center items-center'>
            <img src={section6} alt="img" className="w-44" />
          </div>
          
          <div className='flex items-center justify-center flex-wrap max-w-full'>
            <div className="s-box-wrapper pt-6 pl-6 w-1/3">
              <div className="s-box bg-white p-10">
                <p className='s-color-text font-bold pb-5 md:text-xl text-lg'>Frontend Development</p>
                <div className='w-full flex justify-start items-center'>
                  <img src={html} alt="html" className='pr-3.5 inline-flex w-11 h-11' />
                  <img src={css} alt="css" className='pr-3.5 inline-flex w-11 h-11' />
                  <img src={javascript} alt="javascript" className='inline-flex w-11 h-11' />
                </div>
                <p className="s-color-text pt-10 pb-8 mb-1.5 text-sm font-normal">This track deals with the aspect of your application that the users interact with. 
                  A front-end developer will be able to correctly interpret a given design to the user 
                  interface.
                </p>
              </div>
            </div>
            <div className="s-box-wrapper pt-6 pl-6 w-1/3">
              <div className="s-box bg-white p-10">
                <p className='s-color-text font-bold pb-5 md:text-xl text-lg'>Backend Development</p>
                <div className='w-full flex justify-start items-center'>
                  <img src={php} alt="php" className='pr-3.5 inline-flex w-20 h-11' />
                  <img src={python} alt="python" className='pr-3.5 inline-flex w-16 h-14' />
                  <img src={javascript} alt="javascript" className='inline-flex w-11 h-11' />
                </div>
                <p className="s-color-text pt-10 pb-8 mb-1.5 text-sm font-normal">This track deals with the aspect of the application the user does not directly interact 
                  with. It allows the frontend function either by running some back-end code or connecting 
                  to the database.
                </p>
              </div>
            </div>
            <div className="s-box-wrapper pt-6 pl-6 w-1/3">
              <div className="s-box bg-white p-10">
                <p className='s-color-text font-bold pb-5 md:text-xl text-lg'>Product Design</p>
                <div className='w-full flex justify-start items-center'>
                  <img src={adobeXd} alt="adobeXd" className='pr-3.5 inline-flex w-16 h-12' />
                  <img src={figma} alt="figma" className='inline-flex w-24 h-12' />
                </div>
                <p className="s-color-text pt-10 pb-8 mb-1.5 text-sm font-normal">This track deals with creating a graphic plan for an application. You will learn to convert 
                  project documentation into viewable and understandable graphic design for the developers to 
                  work with.
                </p>
              </div>
            </div>
            <div className="s-box-wrapper pt-6 pl-6 w-1/3">
              <div className="s-box bg-white p-10">
                <p className='s-color-text font-bold pb-5 md:text-xl text-lg'>DevOPS</p>
                <div className='w-full flex justify-start items-center'>
                  <img src={ubuntu} alt="ubuntu" className='pr-3.5 inline-flex w-28 h-12' />
                  <img src={bash} alt="bash" className='pr-3.5 inline-flex w-20 h-12' />
                  <img src={aws} alt="aws" className='inline-flex w-20 h-12' />
                </div>
                <p className="s-color-text pt-10 pb-8 mb-1.5 text-sm font-normal">The DevOps track is an extension of the backend track. It involves tools that’ll allow the 
                  participant to deploy solutions for public use.
                </p>
              </div>
            </div>
            <div className="s-box-wrapper pt-6 pl-6 w-1/3">
              <div className="s-box bg-white p-10">
                <p className='s-color-text font-bold pb-5 md:text-xl text-lg'>Fullstack Development</p>
                <div className='w-full flex justify-start items-center'>
                  <img src={html} alt="html" className='pr-3.5 inline-flex w-11 h-11' />
                  <img src={css} alt="css" className='pr-3.5 inline-flex w-11 h-11' />
                  <img src={javascript} alt="javascript" className='pr-3.5 inline-flex w-11 h-11' />
                  <img src={python} alt="python" className='inline-flex w-16 h-14' />
                </div>
                <p className="s-color-text pt-10 pb-8 mb-1.5 text-sm font-normal">A combination of frontend, backend, and DevOps. This track will only be available to 
                  participants who have the time to dedicate to the training.
                </p>
              </div>
            </div>
            <div className="s-box-wrapper pt-6 pl-6 w-1/3">
              <div className="s-box bg-white p-10">
                <p className='s-color-text font-bold pb-5 md:text-xl text-lg'>Frameworks</p>
                <div className='w-full flex justify-start items-center'>
                  <img src={laravel} alt="laravel" className='pr-3.5 inline-flex w-20 h-9' />
                  <img src={react} alt="react" className='pr-3.5 inline-flex w-20 h-9' />
                  <img src={django} alt="django" className='inline-flex w-20 h-9' />
                </div>
                <p className="s-color-text pt-10 pb-8 mb-1.5 text-sm font-normal">During the program we will be exploring several useful frameworks to give you an edge in 
                  the industry and help you develop complex applications much faster.
                </p>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center my-16'>
            <Button name="Enroll Now" />
          </div>
          <hr />
        </div>
      </section>


      <section className="seventh-sec w-full h-auto" id='faqs'>
        <div className="container pt-8 2xl:px-0 px-8">
          <div className="mt-2.5 ml-36">
            <img src={Section7Wire} alt="wire" className='w-1/12 inline-flex' />
          </div>

          <div>
            <p className='w-full text-center text-2xl red-text not-italic seventh-sec-small-text'>Got Questions</p>
            <p className='w-full text-center pb-24 seventh-sec-bold-text font-bold not-italic'>Frequently Asked Questions</p>
          </div>

          <div className="faq-box1">
            <div className="faq-row-wrapper">
              <section className="flex flex-col justify-center items-start faq-row p-5">
                <div className="w-full flex flex-row justify-between">
                  <h2 className="faq-row-title pr-14 font-semibold text-lg">Would I have to pay to enroll for the training</h2>
                  <span className="cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>

                <div className="">
                  <p className="">No, the program is completely free thanks to Ingressive For Good</p>
                </div>
              </section>
              <section className="flex flex-col justify-center items-start faq-row p-5">
                <div className="w-full flex flex-row justify-between">
                  <h2 className="faq-row-title pr-14 font-semibold text-lg">What are the things I will need to participate</h2>
                  <span className="cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>

                <div className="">
                  <p className="">You'll need a laptop, internet connection and the willingness to learn through collaboration and mentorship.</p>
                </div>
              </section>
              <section className="flex flex-col justify-center items-start faq-row p-5">
                <div className="w-full flex flex-row justify-between">
                  <h2 className="faq-row-title pr-14 font-semibold text-lg">What happens if i join and I'm not active?</h2>
                  <span className="cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>

                <div className="">
                  <p className="">Participants who join the program and stop engaging will be given the chance to catch up. You'll also be assigned
                   a 'study-mate' and mentor to help you. However, there is the possibility of not being promoted to the next stage if you remain 
                   inactive for too long
                  </p>
                </div>
              </section>
              <section className="flex flex-col justify-center items-start faq-row p-5">
                <div className="w-full flex flex-row justify-between">
                  <h2 className="faq-row-title pr-14 font-semibold text-lg">Can I switch from part-time track to full-time and vice-versa?</h2>
                  <span className="cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>

                <div className="">
                  <p className=''>Unfortunately, no, you cannot switch from part-time to full-time and vice-versa</p>
                </div>
              </section>
              <section className="flex flex-col justify-center items-start faq-row p-5">
                <div className="w-full flex flex-row justify-between">
                  <h2 className="faq-row-title pr-14 font-semibold text-lg">Will I get paid?</h2>
                  <span className="cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>

                <div className="">
                  <p className="">We reward some participants who complete tasks early, however, this is not a weekly reward. 
                    All the work that will be done during the program are hypothetical.
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="w-full flex justify-center items-center pt-16 pb-10">
            <p className="font-normal not-italic pr-2.5 pb-1.5 text-lg">Still got questions?</p>
            <div className='bg cursor-pointer list-none text-lg py-2.5 md:px-8 px-5 font-normal inline-flex mb-1.5'>
              <a href='/' className="flex items-center justify-center">
                <img src={twitter} alt="twitter" className='h-7 w-8' />
                <p className="text-base">Tweet them at us</p>
              </a>
            </div>
          </div>

          <hr />
        </div>
      </section>


      <section className="eight-sec overflow-x-hidden relative">
        <div className="container pt-8 2xl:px-0 px-8">
          <div className="mt-2.5 ml-36">
            <img src={Section7Wire} alt="wire" className='w-1/12 inline-flex' />
          </div>

          <div className="w-full star-box flex justify-end items-center">
            <img src={star1} alt="star" className='w-1/12' />
          </div>

          <div>
            <p className='text-center w-full eight-sec-small-text red-text md:text-2xl text-lg'>Structure</p>
            <p className='text-center w-full eight-sec-bold-text pb-5 font-bold'>Program Structure</p>
            <p className='text-center w-full pb-16 text-lg eight-sec-thin-text'>There two broad paths in this program based on your availability</p>
          </div>

          <div className="flex flex-wrap">
            <div className='move absolute left-0 2xl:block hidden'>
              <img src={move} alt="move" />
            </div>

            <div className='flex pt-10 pl-10 w-2/4 eight-sec-box-wrapper'>
              <div className="w-full py-16 px-12 eight-sec-box text-white">
                <p className="pb-4 text-4xl font-bold not-italic w-full">Full-time</p>

                <p className="w-11/12 text-base pb-5 not-italic">Requires at least 25 hours weekly on program content.</p>

                <p className="text-lg w-11/12 font-black not-italic leading-snug">Available Tracks:</p>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <p className="leading-snug text-base">Full Stack: Backend (Python, JavaScript), Frontend (HTML, CSS, JavaScript) &amp; DevOps</p>
                </div>
                <div className="flex justify-start items-start pb-4">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <p className="leading-snug text-base w-11/12">Design: Figma, Adobe XD</p>
                </div>

                <p className="text-lg w-11/12 font-black not-italic leading-snug">Phases:</p>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <p className="leading-snug text-base w-11/12">Training Phase</p>
                </div>
                <div className="flex justify-start items-start pb-4">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <p className="leading-snug text-base w-11/12">Project Phase</p>
                </div>

                <p className="text-lg w-11/12 font-black not-italic leading-snug">Post Program:</p>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <p className="leading-snug text-base w-11/12">Certification of Attendance</p>
                </div>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <div className="inline-flex items-center justify-start w-11/12">
                    <p className="leading-snug text-base pr-2 underline cursor-pointer">Zuri Internship</p>
                    <img src={clarity} alt="clarity" className='w-4 h-4' />
                  </div>
                </div>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <div className="inline-flex items-center justify-start w-11/12">
                    <p className="leading-snug text-base pr-2 underline cursor-pointer">Laptop Reward (upgrade or new one)</p>
                    <img src={clarity} alt="clarity" className='w-4 h-4' />
                  </div>
                </div>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <div className="inline-flex items-center justify-start w-11/12">
                    <p className="leading-snug text-base pr-2 underline cursor-pointer">Job Placement</p>
                    <img src={clarity} alt="clarity" className='w-4 h-4' />
                  </div>
                </div>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <div className="inline-flex items-center justify-start w-11/12">
                    <p className="leading-snug text-base pr-2 underline cursor-pointer">Zuri Talent Pool</p>
                    <img src={clarity} alt="clarity" className='w-4 h-4' />
                  </div>
                </div>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <div className="inline-flex items-center justify-start w-11/12">
                    <p className="leading-snug text-base pr-2 underline cursor-pointer">More Training:</p>
                    <img src={clarity} alt="clarity" className='w-4 h-4' />
                  </div>
                </div>
                <div className="flex justify-start items-start">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">Interview Prep</p>
                </div>
                <div className="flex justify-start items-start">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">Alogarithms &amp; Data Structure</p>
                </div>
                <div className="flex justify-start items-start">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">Freelance Setup &amp; Training</p>
                </div>
                <div className="flex justify-start items-start">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">LinkedIn Optimization</p>
                </div>
                <div className="flex justify-start items-start">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">CV Review</p>
                </div>

                {/* <img src={hour} alt="hour" className='w-1/5 hour inline-flex float-right' /> */}
              </div>
            </div>


            <div className='flex pt-10 pl-10 w-2/4 eight-sec-box-wrapper'>
              <div className="w-full py-16 px-12 eight-sec-box text-white">
                <p className="pb-4 text-4xl font-bold not-italic w-full">Part-time</p>

                <p className="w-11/12 text-base pb-5 not-italic">Requires at least 11 hours weekly on program content.</p>

                <p className="text-lg w-11/12 font-black not-italic">Available Tracks:</p>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div> 
                  <p className="leading-snug text-base w-11/12">Frontend:</p>
                </div>
                <div className="flex justify-start items-start pb-4">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">HTML, CSS, Javascript</p>
                </div>

                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div> 
                  <p className="leading-snug text-base w-11/12">Backend: Can only select one backend language</p>
                </div>
                <div className="flex justify-start items-start">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">Python,</p>
                </div>
                <div className="flex justify-start items-start">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">PHP,</p>
                </div>
                <div className="flex justify-start items-start pb-4">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">Javascript</p>
                </div>

                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div> 
                  <p className="leading-snug text-base w-11/12">Design:</p>
                </div>
                <div className="flex justify-start items-start pb-4">
                  <div className="pr-4"></div>
                  <p className="leading-snug text-base w-11/12">Figma</p>
                </div>

                <p className="text-lg w-11/12 font-black not-italic leading-snug">Phases:</p>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <p className="leading-snug text-base w-11/12">Training Phase</p>
                </div>

                <p className="text-lg w-11/12 font-black not-italic leading-snug">Post Program:</p>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <p className="leading-snug text-base w-11/12">Certification of Attendance</p>
                </div>
                <div className="flex justify-start items-start">
                  <div className="h-6 w-4 flex items-center pr-2.5">
                    <FontAwesomeIcon icon={faDotCircle} className="w-1.5 h-1.5" />
                  </div>
                  <p className="leading-snug text-base pr-2 underline cursor-pointer w-11/12">Zuri Internship</p>
                </div>

                {/* <img src={time} alt="time" className='w-2/5 time inline-flex float-right' /> */}
              </div>
            </div>
          </div>

          <div>
            <img src={circle} alt="circle" className='circle w-2/12 float-right inline-flex' />
          </div>
        </div>
      </section>


      <section className="nineth-sec">
        <div className="container nineth-sec-wrapper pt-12 2xl:px-0 px-8">
          <div>
            <img src={circle} alt="circle" className='circle1 mb-7' />
          </div>

          <div className='box9-wrapper relative'>
            <div className="">
              <img src={round} alt="round" className='w-1/12 round absolute left-24 mt-16' />
            </div>
            <div className="box9">
              <p className="pt-16 text-lg w-full flex justify-center text-white">Get Started</p>
              <p className="box9-bold-text pt-5 pb-10 text-white mx-auto font-bold text-center leading-tight">Break into the tech industry like a Pro</p>
              <div className="w-full flex justify-center items-center">
                <button className='box9-btn cursor-pointer list-none text-lg py-2.5 md:px-8 px-5 font-normal inline-flex'>Enroll Now</button>
              </div>
              <div className="flex items-end justify-between">
                <div className='curve'>
                  <img src={curve} alt="curve" className='' />
                </div>
                <div className='mains'>
                  <img src={mains} alt="mains" className='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="tenth-sec">
        <div className="container pt-24 pb-5 2xl:px-0 px-8">
          <div className='flex sm:flex-row flex-col items-center justify-between'>
            <div className='pt-4 pl-4 w-1/2'>
              <div>
                <img src={Logo} alt="logo" className="inline-flex" />
              </div>
            </div>
            <div className='pt-4 pl-4 w-1/2'>
              <div className="flex sm:justify-end justify-center items-center">
                <div className="w-auto inline-flex">
                  <a href="http://" target="_blank" rel="noopener noreferrer" className='pr-2.5'>
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer" className='pr-2.5'>
                    <img src={linkd} alt="linkedIn" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer" className='pr-2.5'>
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer" className='pr-2.5'>
                    <img src={youtube} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5 flex sm:flex-row flex-col items-center justify-between'>
            <p className="my-4 text-base footer-text font-normal">© 2022 Zuri Training</p>

            <div className="flex sm:flex-row flex-col items-center justify-center sm:w-auto w-full text-center">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='mr-4'>
                <p className="text-base footer-text font-normal my-4">Privacy Policy</p>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <p className="text-base footer-text font-normal my-4">Ingressive For Good</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrainingPage;