// Import statements
import { Provider } from "react-redux";
import store from "../src/utils/store";
import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

// Head
// Body 
//   sidebar
//     menuitems
//   main container 
//     buttonslist
//     videocontainer
//       videocards