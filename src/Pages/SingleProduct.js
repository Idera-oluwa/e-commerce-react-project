import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar'
import './singleProduct.css'
import {Link} from 'react-router-dom'
import {BsStar,BsStarFill,BsStarHalf} from 'react-icons/bs'
import {FaCheck,FaMinus,FaPlus} from 'react-icons/fa';
import {useCartContext} from '../cartContext'
function SingleProduct() {
  const {handleCart} = useCartContext();
    const [product, setProduct] =useState({})
    const [amount, setAmount] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {id} = useParams();
    const single_url=`https://sp-server-y82x.onrender.com/?id=${id}`
    const fetchProduct =async()=>{
      setLoading(true)
    try{
      const response = await fetch(single_url)
      const data = await response.json();
      setProduct(data)
      setLoading(false)
      setError(false)
    }
    catch(error){
     setLoading(false)
     setError(true)
    }
    }
    useEffect(()=>{
        fetchProduct();
    },[])
    const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    colors=[[]],
    images=[[]],
  } = product;
 
  const [tempImage, setTempImage] = useState(images[0]);
  const [tempColor, setTempColor] = useState(colors[0]);
  const [imageChange, setImageChange] = useState(false)
  const [colorChange, setColorChange] = useState(false)
  let mainColor = colors[0]
  if (colorChange === true){
    mainColor = tempColor
  }
let mainImage = images[0];
if (imageChange === true){
  mainImage = tempImage
}
const handleColorChange=(index)=>{
  setColorChange(true)
setTempColor(colors[index])
}
  const handleImgChange = (index) =>{
    setImageChange(true)
    setTempImage(images[index])
  }
    const tempStars= Array.from({length:5},(_,index)=>{
    const num1=index + 0.5;
    const num2=index + 1
    return(
      <span className='tempstars'>
        {stars >= num2 ? (<BsStarFill/>): stars >num1 ? (<BsStarHalf/>) : (<BsStar/>)}
      </span>
    )
  })
  const increase =()=>{
    setAmount(amount+1);
    if (amount>=stock){
      setAmount(stock)
    }
  }
  const decrease =()=>{
    setAmount(amount-1);
    if (amount<=1){
      setAmount(1)
    }
  }
  if(loading){
    return(
        <div className='loading'></div>
    )
}
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
            <div className='sproducts-header'>
            <h1 className='sproducts-header-text'><Link
                 style={{textDecoration:'none'}} to='/'><span className='span'>Home </span></Link>
                 <Link
                 style={{textDecoration:'none'}} to='/products'><span className='span'> 
                  / Products </span></Link>
                   / {name}</h1>
            </div>
            <div className='single-products-content'>
            <Link to='/products' style={{textDecoration:'none'}}>
            <button className='single-products-button'>BACK TO PRODUCTS</button></Link>
            <div className='single-products-contents-container'>
            <div className='single-products-images-container'>
                {/*IMAGES CONTAINER*/}
                <img src={mainImage.url} alt='' className='main ' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt=''
              key={index}
              className={`${image.url === mainImage.url  ? 'active gallery-image' : 'gallery-image'}`}
              onClick={() => handleImgChange(index)}
            />
          )
        })}
      </div>
            </div>
            <div className='single-product-info-container'>
                {/*SECOND SIDE CONTAINER*/}
                <h1 className='single-product-info-name'>{name}</h1>
                <div className='stars-container'>
                <div className='stars'>{tempStars}</div>
                <p className='reviews'>({reviews} customer reviews)</p>
                </div>
                <h3 className='single-product-info-price'>₦{price/10}9</h3>
                <p className='single-product-info-description'>{description}</p>
                <p className='single-product-info-paragraph para'><span className='single-product-info-span'>Available:</span> {stock > 0 ? 'In stock' : 'out of stock'}</p>
                <p className='single-product-info-paragraph para'><span className='single-product-info-span'>SKU: </span>{sku}</p>
                <p className='single-product-info-paragraph para'> <span className='single-product-info-span'>Brand: </span>{company}</p>
                <hr/>
                {stock <= 0 ? <h1>Out of stock!</h1> :<div>
                <div className='colors-section'>
                  <h3 className='colors-header'>Colors: </h3>
                  <div className='colors-container'>
                    {colors.map((color, index)=>{
                     return(
                       <div key={index}>
                         <button
                         style={{ background: color }}
                         className={mainColor === color? 'color-btn color-active' : 'color-btn'}
                         onClick={()=>handleColorChange(index)}
                         >
                         {mainColor === color ? <FaCheck /> : null}
                         </button>
                       </div>
                     )
                    })}
                  </div>
                </div>
                <div className='amount-section'>
                <button type='button' className='amount-btn' onClick={decrease}>
                <FaMinus />
                 </button>
                 <h2 className='amount'>{amount}</h2>
                  <button type='button' className='amount-btn' onClick={increase}>
                  <FaPlus />
                  </button>
                </div>
                <Link to='/cart' style={{textDecoration:'none'}}>
                <button className='sp-cart-btn' 
                onClick={()=>handleCart(amount,product,id,mainColor,mainImage)}>
                ADD TO CART</button>
                </Link>
                </div>}
            </div>
            </div>
            </div>
             <Footer/>
        </div>
    )
}

export default SingleProduct;
