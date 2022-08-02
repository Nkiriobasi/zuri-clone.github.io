import zuriLogo from './assets/zuri-logo-full.svg';
import zuriTraining from './assets/zuri-training-img.svg'
import zuriInternship from './assets/zuri-internship-img.svg';
import zuriTalent from './assets/zuri-talent-img.svg';


function App() {
  return (
    <>
      <section className='hero-wrapper'>
        <div className='hero-center-image flex justify-center'>
          <img src={zuriLogo} className='logo-img' alt="zuri logo" />
        </div>
        <div className="hero-text-content text-center my-0 mx-auto p-2.5">
          <h2 className="hero-heading font-extrabold mb-9">Learn, Build, Grow.</h2>
          <p className="text-base mb-4">Unlock your Brilliance with our hands-on <span> beginner </span> and <span> expert training. </span> 
            Zuri Team has been immensely successful in creating a global network of a highly adept 
            intelligent workforce that can help your company achieve their mission-critical <span>projects and goals</span>
          </p>
          <div className="btn-wrapper">
            <button className="btn btn-red mr-6">I'm new to the Industry</button>
            <button className='btn'>I need industry experience</button>
          </div>
        </div>
      </section>


      <section className='w-full h-auto'>
        <div className='programs-text-content text-center my-0 mx-auto px-3.5'>
          <h3 className="text-sm md:mt-36 mt-16 mb-2"><span>BY ZURI Team</span></h3>
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
                    <h3 className="text-left text-sm mb-2"><span>I want to be trained &gt;</span></h3>
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
                    <h3 className="text-left text-sm mb-2"><span>I want to join the internship &gt;</span></h3>
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
                    <h3 className="text-left text-sm mb-2"><span>I am looking for talents &gt;</span></h3>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;



