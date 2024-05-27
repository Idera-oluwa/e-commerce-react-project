import React from 'react'
import './cards.css'
import {GiDiamondHard, GiEnlightenment,GiScrollQuill} from 'react-icons/gi'

function Cards() {
    return (
        <div className='cards-total-container'>
            <div className='cards-text-container'>
         <h1 className='cards-heading'>Custom Furniture Built Only For You</h1>
         <p className='cards-paragraph'>Do culpa non ut sit non consectetur eu ea aliquip.
             Excepteur pariatur aute veniam elit eu excepteur excepteur Lorem incididunt aute quis.</p>
            </div>
            <div className='cards-container'>
                <div  className='card-container'>
                    <p><GiEnlightenment className='icons'/></p>
                    <h2 className='card-heading'>Mission</h2>
                    <p className='card-text'>Ut adipisicing esse sit ea ut nulla.
                        Occaecat duis mollit et dolor sint nostrud.
                        Nostrud elit sit laborum adipisicing ipsum adipisicing.</p>
                </div>
                <div className='card-container'>
                    <p><GiDiamondHard className='icons'/></p>
                    <h2 className='card-heading'>Vision</h2>
                    <p className='card-text'>Ut adipisicing esse sit ea ut nulla.
                        Occaecat duis mollit et dolor sint nostrud.
                        Nostrud elit sit laborum adipisicing ipsum adipisicing.</p>
                </div>
                <div className='card-container'>
                    <p><GiScrollQuill className='icons'/></p>
                    <h2 className='card-heading'>History</h2>
                    <p className='card-text'>Ut adipisicing esse sit ea ut nulla.
                        Occaecat duis mollit et dolor sint nostrud.
                        Nostrud elit sit laborum adipisicing ipsum adipisicing.</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
