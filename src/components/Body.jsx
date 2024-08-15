// Import statements
import Sidebar from "../components/Sidebar";
import Maincontainer from "./Maincontainer";
import store from '../utils/store';

// Body component
const Body = () => {
  return (
    // Provider component wraps the entire application to provide the Redux store
    
      <div className='flex'>
        {/* Sidebar and Maincontainer components are rendered inside a flex container */}
        <Sidebar />
        <Maincontainer />
      </div>
    
  );
}

export default Body;
