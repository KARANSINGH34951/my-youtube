import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const ismenuopen = useSelector((store) => store.app.ismenuopen);


  if(!ismenuopen) return null;

  return (
    <div className='p-5 w-48 shadow-md '>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>shorts</li>
        <li>Video</li>
        <li>live</li>
      </ul>

      <h1 className='pt-4 font-bold'>Subscription </h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='pt-4 font-bold'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>


    </div>
  )
}

export default Sidebar