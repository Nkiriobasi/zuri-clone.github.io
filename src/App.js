import zuriLogoFull from './assets/zuri-logo-full.svg';

function App() {
  return (
    <>
      <section className='hero-wrapper'>
        <div className='hero-center-image flex justify-center'>
          <img src={zuriLogoFull} className='logo-img' alt="zuri logo" />
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

      <section className='programs'></section>
    </>
  );
}

export default App;
