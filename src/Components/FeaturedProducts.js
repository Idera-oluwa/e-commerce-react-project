import React from 'react'
import {useGlobalContext} from '../context';
import './featured.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

function FeaturedProducts() {
    const {featured} = useGlobalContext();
    return (
        <div className='featured-container'>
            <h1 className='featured-heading'>Featured Products</h1>
            <div className='featured-items-container'>
            {featured.slice(0,3).map((item)=>{
            const {id,name,image,price} = item;
            return(
                <div key={id}>
                <div className='image-search-container'>
                <img src={image} className='featured-image'/>
                <div className='search-container'>
                   <div className='search-icon-container'> <Link to={`/products/${id}`}><FaSearch className='search-icon'/></Link> </div>
                </div>
                </div>
                    <div className='featured-name-price'>
                        <p className='featured-name'>{name}</p>
                        <p className='featured-price'>₦{price/10}9</p>
                    </div>
                </div>
            )
            })}
            </div>
           <Link to='/products'> <button className='featured-btn'>ALL PRODUCTS</button></Link>
        </div>
    )
}


export default FeaturedProducts
