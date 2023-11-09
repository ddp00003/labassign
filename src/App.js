import logo from './logo.svg';
import Navbar from './Navbar.js';
import Card from './Card.js';
import Home from './Home.js';
import Contact from './Contact.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/card" element={<Card />}></Route>
           <Route path="/contact" element={<Contact />}></Route>
         </Routes>
    </BrowserRouter>
  </div>
 
  );
}
export default App;
