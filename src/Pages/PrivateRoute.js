import React from 'react';
import {useGlobalContext} from '../context'
import {Navigate} from 'react-router-dom'

const PrivateRoute =({children})=>{
    const {myUser} = useGlobalContext();
    return(
        <div>
      {myUser? children : <Navigate to='/cart'/>}
        </div>
    )
}
export default PrivateRoute;