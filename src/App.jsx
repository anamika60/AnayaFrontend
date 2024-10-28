import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Body from "./components/Body";
import { Web } from "./components/Web";

function App() {

  return (
  
   <div className="overflow-hidden max-w-[2000px] m-auto">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Body />} />
    <Route path="/web" element={<Web />} />

    </Routes>
   </div>


  );
}

export default App;