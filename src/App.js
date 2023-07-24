
import './assets/App.css';
import './assets/aboutme.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useScroll } from "framer-motion";
 
import Navibar from './components/navbar';
import HomePage from './pages/homepage';
import Contact from './pages/contact';
import Aboutme from './pages/aboutme';
import Footer from './components/footer';
import NotFound from './pages/error404';
 

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <BrowserRouter>
    <div className="App">
    
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navibar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutibrahim" element={<Aboutme />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      
      <div id="footer">
            <Footer />
      </div>
    </div>
  </BrowserRouter>
   
  );
}

export default App;
