import React from 'react'
import {useGlobalContext} from '../context'
import GridView from '../Components/GridView'
import ListView from '../Components/ListView'

function ProductsList() {
    const {products,gridView} = useGlobalContext();

    if (products.length < 1){
        return(
            <h1>Sorry, no products matched your search.</h1>
        )
    }
    return (
        <div>
           {gridView ? <GridView/> : <ListView/>}
        </div>
    )
}

export default ProductsList
