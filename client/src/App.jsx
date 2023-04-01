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
}

export default App;