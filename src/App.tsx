import './App.css';
import { ToastContainer } from "react-toastify";
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from './components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import About from './components/About';
import Business from './components/Business';
import NewCard from './components/NewCard';

import AllCards from './components/AllCards';
import MyCards from './components/MyCards';
import Nav from './components/Nav';
import { createContext, useState } from "react";




function App() {

  let [isBussines, setIsBussines] = useState<boolean>(false);
  let [isLoggedin, setIsLoggedin] = useState<boolean>(false);



  return (
    <>

      <ToastContainer />
      <Router>
        <Nav isBussines={isBussines} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin setIsBussines={setIsBussines} setIsLoggedin={setIsLoggedin} />} />

          <Route path="/sign-up" element={<Signup setIsLoggedin={setIsLoggedin} />} />
          <Route path="/about" element={<About />} />
          <Route path="/bussines" element={<Business setIsLoggedin={setIsLoggedin} setIsBussines={setIsBussines} />} />
          <Route path="/new-card" element={<NewCard />} />
          <Route path="/all-cards" element={<AllCards />} />
          <Route path="/my-cards" element={<MyCards />} />


        </Routes>
        <Footer></Footer>
      </Router>




    </>
  );
}
export default App;




















