import React from 'react'
import './subscribe.css'

function Subscribe() {
    return (
        <div className='subscribe-container'>
                <h2 className='subscribe-heading'>Join our newsletter and get 20% off</h2>
                <div className='subcribe-flex-container'>
                <p className='subscribe-text'>Exercitation velit velit incididunt consequat aliquip eu cillum duis amet duis.
                    Id irure dolor nisi esse est. Mollit est et dolor in elit commodo ullamco commodo irure sit eu.</p>
            <form className='subscribe-input-div'
            action="https://formspree.io/f/xnqrdznj"
              method="POST"
              >
                <input type='email' className='subscribe-input' placeholder='Enter Email' name='_replyto' required/>
                <button type='submit' className='subscribe-button'>Subscibe</button>
            </form>
            </div>
            </div>
    )
}

export default Subscribe
