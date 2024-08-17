import { useEffect } from 'react'
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
    <div className='px-5'><iframe width="1000" height="500" src={`https://www.youtube.com/embed/${SearchParams.get("v")}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  )
}

export default Watchpage