import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import FeaturedProducts from '../Components/FeaturedProducts';
import Subscribe from '../Components/Subscribe';
import {useGlobalContext} from '../context'

function Home() {
    return (
        <div>
       <Navbar/>
       <Sidebar/>
       <Hero/>
       <FeaturedProducts/>
       <Cards/>
       <Subscribe/>
       <Footer/>
        </div>
    )
}

export default Home
