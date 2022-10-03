import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer className='footer-container'>
            <p className='footer-text'>© {new Date().getFullYear()} <span className='footer-span'>ComfySloth</span> All rights reserved</p>
        </footer>
    )
}

export default Footer
