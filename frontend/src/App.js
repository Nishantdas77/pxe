import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home/Home"
import Director from "./Home/Director";

function App() {
  return (
    <BrowserRouter>
      <Routes>
   
      <Route path="/" element={<Home/>} />
      <Route path="/director" element={<Director/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
