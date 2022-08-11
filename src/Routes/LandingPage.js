import React from 'react'

import zuriLogo from '../assets/zuri-logo-full.svg';
import zuriTraining from '../assets/zuri-training-img.svg'
import zuriInternship from '../assets/zuri-internship-img.svg';
import zuriTalent from '../assets/zuri-talent-img.svg';
import Fb from '../assets/fb.png';
import Twitter from '../assets/twitter.png';
import In from '../assets/in.png';
import IG from '../assets/IG.png';

import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <main className='landing-page'>
      <section className='hero-wrapper'>
        <div className='hero-center-image flex justify-center'>
          <img src={zuriLogo} className='logo-img' alt="zuri logo" />
        </div>
        <div className="hero-text-content text-center my-0 mx-auto p-2.5">
          <h2 className="hero-heading font-extrabold mb-9">Learn, Build, Grow.</h2>
          <p className="text-base mb-4">Unlock your Brilliance with our hands-on <span className='red-text'> beginner </span> and <span className='red-text'> expert training. </span> 
            Zuri Team has been immensely successful in creating a global network of a highly adept 
            intelligent workforce that can help your company achieve their mission-critical <span className='red-text'>projects and goals</span>
          </p>
          <div className="btn-wrapper">
            <Link to="/training" className="btn btn-red mr-6">I'm new to the Industry</Link>
            <Link to="" className='btn'>I need industry experience</Link>
          </div>
        </div>
      </section>


      <section className='w-full h-auto'>
        <div className='programs-text-content text-center my-0 mx-auto px-3.5'>
          <h3 className="text-sm md:mt-36 mt-16 mb-2"><span className='red-text'>BY ZURI Team</span></h3>
          <p className="text-2xl mt-2 mb-16">We cather for every level of <br /> expertise and needs in the industry.</p>

          <div className="text-center w-auto">
            <div className="flex justify-center lg:flex-row flex-col">
              <div className="program-card-wrap px-3.5 lg:ml-auto">
                <div className="program-card lg:my-0 my-6">
                  <div className="program-card-content">
                    <img src={zuriTraining} alt="zuri training" className='mb-12' />
                    <p className='mb-4 text-left'>We understand a complete beginner cannot become a professional after a few weeks, 
                      the aim here is to get you familiar enough with each the tools such that you’ll be 
                      able to continue learning on your own with minimal support.
                    </p>
                    <h3 className="text-left text-sm mb-2 cursor-pointer"><span className='red-text'>I want to be trained &gt;</span></h3>
                  </div>
                </div>
              </div>
              <div className="program-card-wrap px-3.5">
                <div className="program-card lg:my-0 my-6">
                  <div className="program-card-content">
                    <img src={zuriInternship} alt="zuri internship" className='mb-12' />
                    <p className='mb-4 text-left'>We place you in a work simulation. We give you tasks every week, the tasks ranges 
                      from easy to hard as you progress from stage to stage, making it to the final stage 
                      means you are ready for actual work.  
                    </p>
                    <h3 className="text-left text-sm mb-2 cursor-pointer"><span className='red-text'>I want to join the internship &gt;</span></h3>
                  </div>
                </div>
              </div>
              <div className="program-card-wrap px-3.5 lg:mr-auto">
                <div className="program-card lg:my-0 my-6">
                  <div className="program-card-content">
                    <img src={zuriTalent} alt="zuri talent" className='mb-12' />
                    <p className='mb-4 text-left'>Keeping pace with projects and being on the look out for the extremely talented
                      individuals has become ever more challenging. Here is where Zuri Team comes into 
                      play to bring the best suited talent for your company
                    </p>
                    <h3 className="text-left text-sm mb-2 cursor-pointer"><span className='red-text'>I am looking for talents &gt;</span></h3>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="mb-14 p-5 flex md:flex-row flex-col md:items-start items-center justify-between">
          <div className="item-1">
            <img src={zuriLogo} alt="zuri logo" className="md:mb-0 mb-3.5 md:w-auto w-36" />
          </div>
          <div className="item-2 md:text-left text-center">
            <h3 className="mb-2 font-bold md:text-base text-2xl md:mt-0 mt-5">Links</h3>
            <p className="mb-4 cursor-pointer"><span className='red-text'>Store</span></p>
            <p className="mb-4 cursor-pointer"><span className='red-text'>Blog</span></p>
          </div>
          <div className="item-3 md:text-left text-center">
            <h3 className="mb-2 font-bold md:text-base text-2xl md:mt-0 mt-5">Contact</h3>
            <p className="mb-4 text-sm">8 Jubliee-CMD Road, Magodo, <br /> Lagos State</p>
            <p className="mb-4 text-sm cursor-pointer"><span className='red-text'>hello@zuri.team</span></p>
          </div>
          <div className="item-4 md:text-left text-center">
            <h3 className="mb-2 font-bold md:text-base text-2xl md:mt-0 mt-5">Follow Us</h3>
            <div className="contact-icons">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={Fb} alt="facebook icon" className='w-5 inline-block mr-1.5' />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="twitter icon" className='w-5 inline-block mr-1.5' />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={IG} alt="instagram icon" className='w-5 inline-block mr-1.5' />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={In} alt="linkedIn icon" className='w-5 inline-block mr-1.5' />
              </a>
            </div>
          </div>
        </div>

        <div>
          <hr className='hr-line my-4' />
        </div>

        <div className="text-center mx-auto">
          <p className='mt-8 mb-4 pb-24 font-bold'>© 2020 ZURI TEAM </p>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;