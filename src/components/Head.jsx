import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Head = () => {
  const [searchquesries,setsearchquesries]=useState("")
  const [suggestions,setsuggestions]=useState([])
  const [showsuggestions,setshowsuggestions]=useState(false)

  const dispatch = useDispatch();
 
  useEffect(()=>{
    const timer = setTimeout(() => {
      getsearchsuggestions();
    }, 300);
    return ()=>{
      clearTimeout(timer)
    }
  },[searchquesries]);

 const getsearchsuggestions=async ()=>{
    console.log(searchquesries);
    const data=await fetch(import.meta.env.VITE_API_YOUTUBESEARCH+searchquesries);
    const json= await data.json();
    console.log(json); 
    setsuggestions(json[1]);  
  };

  const togglemenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <div className="head grid grid-flow-col p-3 m-2 shadow-md">
        <div 
          className="head__right flex grid-cols-1 "    
        >

          <img className='cursor-pointer h-10 px-4' onClick={togglemenuHandler}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
          {/* <MoreHorizIcon /> */}
          <img
            className='h-12 px-4'
            src="https://th.bing.com/th/id/OIP.kdMaF0Kg8eOIzhre3nHjkgHaEv?w=294&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Menu Icon"
          />
        </div>

        <div className='grid-cols-10 px-5'>
          <div>
          <input
            type="text"
            placeholder="Search"
            value={searchquesries}
            onChange={(e)=>setsearchquesries(e.target.value)}
            onFocus={()=>setshowsuggestions(true)}
            onBlur={()=>setshowsuggestions(false)}
            className='border-2 border-black rounded-l-full w-2/3 p-2'
          />
          <button className='bg-black text-white p-3 rounded-r-full'>
            Search
          </button>
          </div>
          {
            showsuggestions &&
            <div className='fixed bg-white py-2 px-5 w-auto shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map((suggestion)=>(
                <li key={suggestion} className='py-2 px-3 shadow-sm hover:bg-gray-100'><SearchIcon/>{suggestion}</li>
              ))}
            </ul>
            </div>
          }
        </div>

        <div className='h-10 left-9 grid-cols-1 flex justify-end items-end px-4'>
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};

export default Head;
