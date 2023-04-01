<<<<<<< HEAD
import "./App.css";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Nav>
              
            </Nav>
        </div>
    );
=======
import './App.css';
import Footer from './components/footer/Footer';
import Testimonials from './pages/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
        <Router>
            <Routes>
                <Route path='/testimonials' element={<Testimonials/>} />
            </Routes>
        </Router>  

      <Footer /> 
    </div>
  );
>>>>>>> 1317edaba24352776fa91c0cede2b47e635a50ad
}

export default App;