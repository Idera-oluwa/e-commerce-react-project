import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom';
import {FaShoppingCart,FaTimes, FaUserPlus,FaUserMinus} from 'react-icons/fa';
import {useCartContext} from '../cartContext'
import {useGlobalContext} from '../context'
import Logo from './Logo.svg'

function Sidebar() {
    const {setShow, show,loginWithRedirect,logout,myUser} = useGlobalContext();
    const {totalItems} = useCartContext();
    return (
       <div className={show ? 'show' : 'sidebar'}>
            <div className='sidebar-container'>
        <div className='sidebar-logo-icon'>
            <img className='logo' src={Logo}/>
            <FaTimes className='times-icon' onClick={()=>setShow(false)}/>
            </div>
            <div className='first-side-links' onClick={()=>setShow(false)}>
                <Link style={{textDecoration:'none'}} to='/'><p className='nav-home links'>Home</p></Link>
                <Link style={{textDecoration:'none'}} to='/about'><p className='nav-about links'>About</p></Link>
                <Link style={{textDecoration:'none'}} to='/products'><p className='nav-products links'>Products</p></Link>
                <Link style={{textDecoration:'none'}} to='/checkout'><p className='nav-checkout links'>Checkout</p></Link>
            </div>
            <div className='second-side-links' onClick={()=>setShow(false)}>
            <Link style={{textDecoration:'none'}} to='/cart'><div className='nav-cart-section-container'>
                <h3 className='nav-cart'>Cart</h3>
                <div className='nav-cart-icon-container'>
                    <h3 className='nav-cart'><FaShoppingCart/></h3>
                    <div className='nav-cart-count'><p className='nav-cart-count-text'>{totalItems}</p></div>
                </div>
                </div></Link>
                {myUser? <h3 className='nav-login' 
                onClick={()=>logout({returnTo:window.localStorage.origin})}>Logout <FaUserMinus/></h3>:
            <h3 className='nav-login' onClick={loginWithRedirect}>Login <FaUserPlus/></h3>
            }     
            </div>
        </div>
       </div>
    )
}

export default Sidebar
