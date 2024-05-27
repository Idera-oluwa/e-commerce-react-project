import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Error from './Pages/Error'
import SingleProduct from './Pages/SingleProduct'
import Checkout from './Pages/Checkout';
import PrivateRoute from './Pages/PrivateRoute';
import {useGlobalContext} from './context'

function App() {
  const {isLoading} = useGlobalContext();
  if(isLoading){
    return(
      <div className='isLoading'>
    <h1>Loading...</h1>
    </div>
    )}
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/' exact element={<Home/>}/>
         <Route path='/about'  element={<About/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='*' element={<Error/>}/>
         <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>}/>
         <Route path='/products/:id' element={<SingleProduct/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
