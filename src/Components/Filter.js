import React,{useState} from 'react';
import {formatPrice} from '../context';
import './Filter.css';
import {useGlobalContext} from '../context'
import { FaCheck } from 'react-icons/fa'

const Filter =()=>{
    const {companySort,allProducts,setCompanySort,handleFilters,clearFilters,filters: {
        text,
        category,
        company,
        color,
        min_price,
        price,
        max_price,
        shipping,}} = useGlobalContext();
    const categories =['all',...new Set(allProducts.map((product)=> product.category))];
    const companies = ['all', ...new Set(allProducts.map((product)=> product.company))];
    const colors = ['all', ...new Set((allProducts.map((product)=> product.colors)).flat())];
    return(
        <div className='filter-container'>
        <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' 
        placeholder='Search' 
        className='filter-search-input'
         name='text'
              value={text}
              onChange={handleFilters}/>
        <div className='filter-category'>
            <h3 className='filter-header'>Category</h3>
            {categories.map((c, index) => {
            return (
                <div key={index}>
                <button className={category=== c ? 'filter-category-item category_active' : 'filter-category-item'}
                  key={index}
                  onClick={handleFilters}
                  type='button'
                  name='category'>{c}</button>
                  </div>
            )})}
                <h3 className='filter-header'>Company</h3>
                <select 
                 name='company'
                 value={company}
                 onChange={handleFilters}
                 className='filter-company-item'
                >
                    {companies.map((item,index)=>{
                        return(
                            <option key={index}>{item}</option>
                        )
                    })}
                </select>
                <div className='form-control'>
                <h3 className='filter-header'>Colors</h3>
            <div className='colors-container'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={handleFilters}
                      data-color='all'
                      className={`${
                        color === 'all' ? 'all-btn all_color_active' : 'all-btn'
                      }`}
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${
                      color === c ? 'filter-color-btn _active' : 'filter-color-btn'
                    }`}
                    data-color={c}
                    onClick={handleFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className='form-control'>
          <h3 className='filter-header'>Price</h3>
            <p  className='filter-price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={handleFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className='form-control-shipping'>
            <label htmlFor='shipping' className='filter-shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              className='shipping'
              checked={shipping}
              onChange={handleFilters}
            />
          </div>
          </div>
          {/* end of  shipping */}
        </form>
        <button type='button' className='filter-clear-btn' onClick={clearFilters}>
          clear filters
        </button>
        </div>
    )
}
export default Filter;