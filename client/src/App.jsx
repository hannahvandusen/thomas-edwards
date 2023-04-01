import './App.css';
import Footer from './components/footer/Footer';
import Testimonials from './pages/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Footer />
  
        <Router>
            <Routes>
                <Route path='/testimonials' element={<Testimonials/>} />
            </Routes>
        </Router>  

    </div>
  );
}

export default App;
