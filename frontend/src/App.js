import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home/Home"
import Director from "./Home/Director";
import RS from "./Home/RS";
import Hrdc from "./Home/Hrdc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
   
      <Route path="/" element={<Home/>} />
      <Route path="/director" element={<Director/>} />
      <Route path="/rs" element={<RS/>} />
      <Route path="/hrdc" element={<Hrdc/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
