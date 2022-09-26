import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom'
import './error.css'

function Error() {
    return (
        <div  className='error-background'>
            <Navbar/>
            <div> 
                <h1 className='error-heading'>404</h1>
                <p className='error-text'>Sorry, the page you tried cannot be found</p>
                <Link to='/'><button className='error-button'>BACK HOME</button></Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Error
