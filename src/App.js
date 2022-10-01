import Navbar from "./components/pages/Navbar";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import S_Booking from "./components/pages/S_Booking";
 

function App() {
  return (
   <div>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/S_Booking' element={<S_Booking/>}/>
 
 
    </Routes>

    <Footer style={{position:"absolute",bottom:"0px"}}/>
    
   </div>
  );
}

export default App;
