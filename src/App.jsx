import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Body from "./components/Body";
import { Web } from "./components/Web";
import 'animate.css';

import Marketing from "./components/Marketing";
import AboutUs from "./components/AboutUs";

function App() {

  return (
  
   <div className="overflow-hidden max-w-[2000px] m-auto">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Body />} />
    <Route path="/web" element={<Web />} />
    <Route path="/digital-marketing" element={<Marketing />} />
    <Route path="/about" element={<AboutUs />} />

    </Routes>
   </div>


  );
}

export default App;