import React from 'react'
import {useGlobalContext} from '../context'
import {Link} from 'react-router-dom'
import './ListView.css'

function ListView() {
    const {products} = useGlobalContext();
    return (
        <div>
            {products.map((product)=>{
                const {id,name,image,price,description}=product;
                return(
                    <div className='list-container'key={id}>
                        <img src={image} alt='' className='list-image'/>
                        <div className='list-info-container'>
                            <h2 className='list-name'>{name}</h2>
                            <h4 className='list-price'>₦{price/10}9</h4>
                            <p className='list-desc'>{description.substring(0,150)}...</p>
                            <Link to={`/products/${id}`}><button className='list-button'>DETAILS</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListView
