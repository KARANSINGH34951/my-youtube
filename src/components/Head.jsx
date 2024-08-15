import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const togglemenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <div className="head grid grid-flow-col p-3 m-2 shadow-md">
        <div 
          className="head__right flex grid-cols-1 " 
          // Correct invocation of the handler
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
          <input
            type="text"
            placeholder="Search"
            className='border-2 border-black rounded-l-full w-2/3 p-2'
          />
          <button className='bg-black text-white p-3 rounded-r-full'>
            Search
          </button>
        </div>

        <div className='h-10 left-9 grid-cols-1 flex justify-end items-end px-4'>
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};

export default Head;
