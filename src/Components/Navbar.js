import React from 'react'
import {Link} from 'react-router-dom';
import {FaShoppingCart,FaBars, FaUserPlus,FaUserMinus} from 'react-icons/fa'
import {useCartContext} from '../cartContext'
import {useGlobalContext} from '../context'
import './Navbar.css'
import Logo from './Logo.svg'

function Navbar() {
    const {setShow,loginWithRedirect,logout,myUser} = useGlobalContext();
    const {totalItems} = useCartContext();
    return (
        <div className='navbar-container'>
            <img className='logo' src={Logo}/>
            <FaBars className='bars-icon' onClick={()=>setShow(true)}/>
            <div className='first-nav-links'>
                <Link style={{textDecoration:'none'}} to='/'><p className='home link'>Home</p></Link>
                <Link style={{textDecoration:'none'}} to='/about'><p className='about link'>About</p></Link>
                <Link style={{textDecoration:'none'}} to='/products'><p className='products link'>Products</p></Link>
               {myUser && <Link style={{textDecoration:'none'}} to='/checkout'><p className='checkout link'>Checkout</p></Link>}
            </div>
            <div className='second-nav-links'>
            <Link style={{textDecoration:'none'}} to='/cart'><div className='cart-section-container'>
                <h3 className='cart'>Cart</h3>
                <div className='cart-icon-container'>
                    <h3 className='cart'><FaShoppingCart/></h3>
                    <div className='cart-count'><p className='cart-count-text'>{totalItems}</p></div>
                </div>
                </div></Link>
                {myUser? <h3 className='login' 
                onClick={()=>logout({returnTo:window.localStorage.origin})}>Logout <FaUserMinus/></h3>:
            <h3 className='login' onClick={loginWithRedirect}>Login <FaUserPlus/></h3>
            }     
            </div>
        </div>
    )
}

export default Navbar
