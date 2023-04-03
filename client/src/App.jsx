import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/footer/Footer';
import Testimonials from './pages/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreIndex from './components/Store/StoreIndex';
import logo from './images/photo1.jpg'
import AboutMe from './components/About/AboutMe'

function App() {
  return (
    <div className="App" >
        <Navigation /> 
        {/* <img src={logo} alt="logo" />  */}
        <Router>
            <Routes>
                <Route path='/testimonials' element={<Testimonials/>} />
                <Route path='/store' element={<StoreIndex/>} /> 
                <Route path='/about' element={<AboutMe/>}/> 
            </Routes>
        </Router>  

      <Footer /> 
    </div>
  );
}

export default App;