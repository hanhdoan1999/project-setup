import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getData} from '../redux/actions/index'

function Home() {

    const data = useSelector(state => state.productReducer.products)
    console.log(data);
    const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(getData())
  }, [])
  
    return (
        <div>
            <ul>
                {data.map((p,index) => <li key={index}>{p.task}</li>)}
            </ul>
        </div>
    )
}

export default Home
