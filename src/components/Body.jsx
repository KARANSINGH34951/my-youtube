// Import statements
import Sidebar from "../components/Sidebar";
import Maincontainer from "./Maincontainer";
import store from '../utils/store';
import { Outlet } from 'react-router-dom';

// Body component
const Body = () => {
  return (  
      <div className='flex'> 
        <Sidebar />
        <Outlet/>
      </div>
    
  );
}

export default Body;
