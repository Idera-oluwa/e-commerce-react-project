import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar'
import {Link} from 'react-router-dom'
import {useCartContext} from '../cartContext'
import {useGlobalContext} from '../context'
import {FaMinus,FaTrash,FaPlus} from 'react-icons/fa';
import './Cart.css'
const Cart =()=>{
    const {myUser,loginWithRedirect} = useGlobalContext();
    const {cart,setCart,clearCart, totalAmount,shippingFee,deleteItem,handleFlutterPayment,closePaymentModal} = useCartContext();
    const increase =(id)=>{
        let tempCart = cart.map((cartItem)=>{
            if (cartItem.id === id){
                let newAmount = cartItem.amount + 1;
                if(newAmount>cartItem.max){
                    newAmount=cartItem.max
                }
                return {...cartItem, amount:newAmount}
            }
            return cartItem
           })
           setCart(tempCart)
    }
      const decrease =(id)=>{
        let tempCart = cart.map((cartItem)=>{
            if (cartItem.id === id){
                let newAmount = cartItem.amount - 1;
                if(newAmount<1){
                    newAmount = 1
                }
                return {...cartItem, amount:newAmount}
            }
            return cartItem
           })
           setCart(tempCart)
      }
    return(
        <div >
            <Navbar/>
            <Sidebar/>
            <div className='cart-header'>
                 <h1 className='cart-header-text'><Link
                 style={{textDecoration:'none'}} to='/'><span className='span'>Home</span></Link> / Cart</h1>
             </div>
             {cart.length < 1 ? <div className='empty-cart'>
                  <h1 className='empty-cart-header'>Your cart is empty</h1>
                  <Link to='/products'><button className='empty-cart-button'>FILL IT</button></Link>
              </div> : <div className='cart-container'>
             <div className='column-container'>
             <p className='column-text'>Item</p>
             <p className='column-text'>Price</p>
             <p className='column-text'>Quantity</p>
             <p className='column-text'>Subtotal</p>
             <span className='cart-column-span'></span>
             </div>
             <hr className='cart-column-header'/>
             <div>
             {cart.map((cartItem)=>{
                const {id,name,mainColor,amount,image,price,max}=cartItem;
                 return(
                     <div key={id} className='cart-items-container'>
                    <div className='cart-image-column'>
                        <img src={image} className='cart-image'/>
                        <div className='cart-name-color'>
                            <h4 className='cart-name'>{name}</h4>
                            <p className='cart-color'>Color : <button className='cart-color-btn'
                         style={{ background: mainColor }}></button></p>
                         <p className='cart-first-price'>₦{price/10}9</p>
                        </div>
                        </div>
                        <p className='cart-price'>₦{price/10}9</p>
                        <div className='cart-amount-section amount-section'>
                     <button type='button' className='cart-amount-btn minus' onClick={()=>decrease(id)}>
                     <FaMinus />
                     </button>
                     <h2 className='cart-amount'>{amount}</h2>
                     <button type='button' className='cart-amount-btn plus' onClick={()=>increase(id)}>
                     <FaPlus />
                  </button>
                </div>
                <p className='cart-subtotal'>₦{amount * price/10}9</p>
                <button className='cart-trash-button' onClick={()=>deleteItem(id)}>{<FaTrash/>}</button>
                     </div>
                 )
             })}
             <hr/>
             </div>
             <div className='cart-buttom-buttons'>
                 <Link to='/products'><button className='continue-shopping'>Continue Shopping</button></Link>
                 <button className='clear-shopping-cart' onClick={clearCart}>Clear Shopping Cart</button>
             </div>
             <div className='cart-total-checkout-container'>
             <div className='cart-total-container'>
             <div className='cart-total-subcontainer'>
                 <h3 className='cart-total-subtotal'>Subtotal: <span>₦{totalAmount/10}9</span></h3>
                 <p className='shiipping-fee'>Shipping Fee: <span>₦{shippingFee}</span></p>
                 <hr className='cart-total-header'/>
                 <h2 className='order-total'>Order Total: <span>₦{(((totalAmount/10)+0.09)+shippingFee).toFixed(2)}</span></h2>
                 </div>
             </div>
            {myUser?  <Link to='/checkout'><button className='cart-checkout'>proceed to checkout</button></Link> :
             <button className='cart-checkout' onClick={loginWithRedirect}>login</button>}
             </div>
             </div>}
             
            <Footer/>
        </div>
    )
}
export default Cart;