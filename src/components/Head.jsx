import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';

const Head = () => {
  return (
    <div>
      <div className="head grid grid-flow-col p-3 m-2 shadow-md">
        
        <div className="head__right flex grid-cols-1 ">
          <MoreHorizIcon/>

          <img className='h-12 px-4' src="https://th.bing.com/th/id/OIP.kdMaF0Kg8eOIzhre3nHjkgHaEv?w=294&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
        </div>

        <div className='grid-cols-10 px-5'>
          <input type="text" placeholder="Search" className='border-2 border-black rounded-l-full w-2/3 p-2'></input>
          <button className='bg-black text-white p-3 rounded-r-full'>Search</button>
        </div>
        <div className='h-8 left-9 grid-cols-1 flex justify-end items-end px-4'>
          <PersonIcon/>
        </div>
      </div>
    </div>
  )
}

export default Head