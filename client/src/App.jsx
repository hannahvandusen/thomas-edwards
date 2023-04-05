import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/footer/Footer';
import Testimonials from './pages/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreIndex from './components/Store/StoreIndex';
import AboutMe from './components/About/AboutMe'
import Admin from './components/Admin/Admin'

function App() {
  return (
    <div className="App" >
        <Navigation /> 
        <Router>
            <Routes>
                <Route path='/testimonials' element={<Testimonials/>} />
                <Route path='/store' element={<StoreIndex/>} /> 
                <Route path='/about' element={<AboutMe/>}/> 
                <Route path='/newsletter'/> 
                <Route path='/admin/login' element ={<Admin /> }/> 
            </Routes>
        </Router>  
      <Footer />
    </div>
  )
}

export default App
