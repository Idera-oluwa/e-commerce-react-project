import React from 'react'
import './Products.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar'
import ProductList from '../Components/ProductsList'
import Sort from '../Components/Sort';
import Filter from '../Components/Filter';
import {Link} from 'react-router-dom'
import './Products.css'
import {useGlobalContext} from '../context'

function Products() {
    const {error} = useGlobalContext();
    if(error){
        return(
            <div className='section section-center text-center'>
      <h2>there was an error...</h2>
    </div>
        )
    }
    return (
        <div>
             <Navbar/>
             <Sidebar/>
             <div className='products-header'>
                 <h1 className='products-header-text'><Link
                 style={{textDecoration:'none'}} to='/'><span className='span'>Home</span></Link> / Products</h1>
             </div>
             <div className='products-container'>
                <Filter/>
                 <div className='sort-productlist'>
                     <Sort/>
                     <ProductList/>
                 </div>
             </div>
             <Footer/>
        </div>
    )
}

export default Products
