import React from 'react'
import './about.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar'
import {Link} from 'react-router-dom'

function About() {
    return (
        <div>
             <Navbar/>
             <Sidebar/>
             <div className='about-header'>
                 <h1 className='about-header-text'><Link
                 style={{textDecoration:'none'}} to='/'><span className='span'>Home</span></Link> / About</h1>
             </div>
             <div className='about-content'>
             <img src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg'
              alt='about image'
              className='about-image'
              />
              <div className='about-text-container'>
                  <h1 className='about-heading'>Our Story</h1>
                  <p className='about-paragraph'>Labore sint amet occaecat laboris quis laboris eu sit magna cillum enim tempor anim.
                       Minim irure irure aute exercitation sunt sit.
                        Adipisicing ut nostrud reprehenderit amet aute cupidatat laboris culpa.
                         Sunt magna nulla et occaecat. Aliquip adipisicing ex mollit do laboris.
                          Aliquip anim nulla nostrud occaecat ullamco reprehenderit fugiat ea labore 
                          anim magna ullamco ex dolor.Est in deserunt sunt nostrud fugiat duis laborum tempor est eu.
                          Aute sunt exercitation adipisicing amet.Proident consectetur dolor ex aute eiusmod voluptate sunt et.</p>
              </div>
             </div>
             <Footer/>
        </div>
    )
}

export default About
