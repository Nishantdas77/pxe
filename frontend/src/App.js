import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './index.css'
import Home from "./Home/Home"
import Director from "./Home/Director";
import RS from "./Home/RS";
import Hrdc from "./Home/Hrdc";
import VerticalNavbar from "./Home/VerticalNavbar";
import Addemployee from "./Home/Addemployee";
import Nav from "./Home/Nav";
import AddInstrument from "./Home/AddInstrument";
import Intern from "./Home/Intern";
import AddIntern from "./Home/AddIntern";
import Contactus from "./Home/Contactus";




function App() {
  return (
    <BrowserRouter>
      <Routes>
   
      <Route path="/" element={<Home/>} />
      <Route path="/director" element={<Director/>} />
      <Route path="/rs" element={<RS/>} />
      <Route path="/hrdc" element={<Hrdc/>} />
      <Route path="/intern" element={<Intern/>} />
      <Route path="/contact" element={<Contactus/>} />

      <Route path="/addemployee" element={<> <Nav/><div className="em">
      <VerticalNavbar/>
      <Addemployee/>
      </div></>} />
      <Route path="/addintern" element={<> <Nav/><div className="em">
      <VerticalNavbar/>
      <AddIntern/>
      </div></>} />
        

    </Routes>
    </BrowserRouter>
  );
}

export default App;
