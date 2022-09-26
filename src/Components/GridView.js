import React from 'react'
import {useGlobalContext} from '../context'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import './GridView.css'

function GridView() {
    const {products} = useGlobalContext();

    return (
        <div>
        <div className='grid-container'>
            {products.map((item)=>{
            const {id,name,image,price} = item;
            return(
                <div key={id}>
                <div className='grid-image-search-container'>
                <img src={image} className='grid-image'/>
                <div className='grid-search-container'>
                   <div className='grid-search-icon-container'> <Link to={`/products/${id}`}><FaSearch className='grid-search-icon'/></Link> </div>
                </div>
                </div>
                    <div className='grid-name-price'>
                        <p className='grid-name'>{name}</p>
                        <p className='grid-price'>₦{price/10}9</p>
                    </div>
                </div>
            )
            })}
            </div>
        </div>
    )
}

export default GridView
