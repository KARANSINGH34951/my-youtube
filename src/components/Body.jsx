
import {Provider} from "react-redux"
import Sidebar from "../components/Sidebar"
import Maincontainer from "./Maincontainer"
import store from '../utils/store'

const Body = () => {
  return (
    <Provider store={store}>
    <div className='flex'>
      <Sidebar/>
      <Maincontainer/>
    </div>
    </Provider>
  )
}

export default Body