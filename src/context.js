import React,{useState, useContext, useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const AppContext = React.createContext();

const productsUrl = 'https://ep-server.onrender.com/api'
const AppProvider = ({children}) =>{
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([])
    const [featured, setFeatured] = useState([])
    const [gridView, setGridView] = useState(true)
    const [loading, setLoading] = useState(true)
    const [allProducts, setAllProducts] = useState([])
    const [myUser, setMyUser] = useState(null)
    const [sort, setSort] = useState('name-a');
    const [error, setError] = useState(false)
    const [filters, setFilters] = useState({text:''.toLowerCase(), category:'all', company:'all', color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false});
    const fetchUrl = async()=>{
        setLoading(true)
        try{
            const response = await fetch(productsUrl);
            const data = await response.json();
            const newData = data.filter((datas)=>datas.featured === true);
            setFeatured(newData)
            setProducts(data);
            setAllProducts(data)
            setError(false)
            setLoading(false)
            let maxPrice = data.map((p) => p.price)
           maxPrice = Math.max(...maxPrice);
           setFilters({...filters,price:maxPrice, max_price:maxPrice})
        }
        catch(error){
         setLoading(false)
         setError(true)
        }
    }
    useEffect(()=>{
fetchUrl();
    },[])

    const handleFilters=(e)=>{
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
    if (name === 'text'){
      value = e.target.value.toLowerCase()
    }
    setFilters({...filters, [name]:value})
    }

    const filterProducts =()=>{
        const { text, category, company, color, price, shipping } = filters;
    let tempProducts = [...allProducts]
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      )
    }
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      )
    }
    if (company !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      )
    }
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => {
    return product.colors.find((c) => c === color)
      })
    }
    // filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price)
    // filter by shipping
    if (shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping === true)
    }
    setProducts(tempProducts)
    }
    const handleSort=()=>{
      if (sort === 'price-lowest') {
        let newItems = allProducts.sort((a,b)=>{
          return a.price - b.price;
        })
        setProducts(newItems)
      }
      if (sort === 'price-highest') {
        let newItems = allProducts.sort((a,b)=>{
          return b.price - a.price;
        })
        setProducts(newItems)
      }
      if (sort === 'name-a') {
        let newItems = allProducts.sort((a,b)=>{
          return a.name.localeCompare(b.name)
        })
        setProducts(newItems);
      }
      if (sort === 'name-z') {
        let newItems = allProducts.sort((a,b)=>{
          return b.name.localeCompare(a.name)
        })
        setProducts(newItems);
    }
  }
    useEffect(()=>{
   handleSort();
   filterProducts();
    },[sort,filters])
    const clearFilters=()=>{
      setFilters({text:'', category:'all', company:'all', color: 'all',shipping:false,price:309999})
    }
    const {isAuthenticated,loginWithRedirect,logout,user,isLoading} = useAuth0();
    useEffect(()=>{
    if(isAuthenticated){
      setMyUser(user)
    }
    else{
      setMyUser(false)
    }
    },[isAuthenticated])
    return(
        <AppContext.Provider value={{show,
         setShow,
         featured,
         error,
         products,
         gridView,
         setGridView,
         allProducts,
         sort,
         setSort,
         clearFilters,
         loading,
          setLoading,
          handleFilters,
          filters,
          loginWithRedirect,
          logout,
          myUser,
          isLoading
          }}>
            {children}
        </AppContext.Provider>
    )
}

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).format((number / 10)+0.09)
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider};