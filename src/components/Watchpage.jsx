import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closemenu } from '../utils/appSlice';
import {useSearchParams} from "react-router-dom"

const Watchpage = () => {

  const [SearchParams]=useSearchParams();
  console.log(SearchParams.get("v"));
  
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closemenu())
  },[])

  return (
    <div>Watchpage</div>
  )
}

export default Watchpage