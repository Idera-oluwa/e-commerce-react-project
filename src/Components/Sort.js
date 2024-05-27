import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import {useGlobalContext} from '../context';
import './Sort.css'

function Sort() {
    const {products,gridView,setGridView,sort,setSort} = useGlobalContext();
    return (
        <div className='sort-container'>
        <div className='button-container'>
            <button className={gridView ? 'sort-button active' : 'sort-button' }
            onClick={()=>setGridView(true)}
            ><BsFillGridFill/></button>
            <button className={gridView ? 'sort-button': 'sort-button active'}
            onClick={()=>setGridView(false)}
            ><BsList/></button>
            </div>
            <p className='sort-products-length'>{products.length} Products Found</p>
            <hr className='sort-hr'/>
            <form>
            <label htmlFor='sort' className='sort-label'>Sort By</label>
                <select
                value={sort}
                className='sort-select'
                id='sort'
                name='sort'
                onChange={(e)=>setSort(e.target.value)}
                >
                <option value='name-a'>name (a - z)</option>
                <option value='name-z'>name (z - a)</option>
                <option value='price-lowest'>price (lowest)</option>
                <option value='price-highest'>price (highest)</option>
                </select>
            </form>
        </div>
    )
}

export default Sort
