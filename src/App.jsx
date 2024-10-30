import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Body from "./components/Body";
import { Web } from "./components/Web";
import { Education } from "./components/Education";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {

  return (
  
   <div className="overflow-hidden max-w-[2000px] m-auto">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Body />} />
    <Route path="/web" element={<Web />} />
    <Route path="/education" element={<Education />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />

    </Routes>
   </div>


  );
}

export default App;