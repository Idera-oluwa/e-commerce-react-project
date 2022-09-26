import React from 'react';
import './Hero.css'
const Hero =()=>{
return(
    <div className='hero-container'v>
        <div className='hero-message'>
            <h1 className='hero-message-heading'>Design Your Comfort Zone</h1>
            <p className='hero-message-text'>Qui magna sint esse excepteur consequat incididunt enim laboris aliqua ea minim consequat officia enim.
                 Nostrud laborum aliqua ullamco qui duis anim sit sint consequat ex non Lorem.
                  Laborum est dolore nisi velit.</p>
                  <button className='hero-button'>SHOP NOW</button>
        </div>
        <div className='hero-images-total-container'>
        <div className='hero-images-background'></div>
        <div className='hero-images-container'>
        <img className='hero-main-image' src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg' alt='Hero image'/>
        <img className='hero-small-image' src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg'/>
        </div>
    </div>
    </div>
)
}
export default Hero;