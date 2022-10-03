import Navbar from "./components/pages/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import S_Booking from "./components/pages/S_Booking";
import { useEffect, useState } from 'react'
import Loader from "./components/pages/Loader";


function App() {

  const [load, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  })

  return (
    <div>
      {
        load ?
          <Loader />
          :
          (
            <div>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/S_Booking' element={<S_Booking />} />
              </Routes>
              <Footer style={{ position: "absolute", bottom: "0px" }} />
            </div>

          )

      }

    </div>
  );
}

export default App;
