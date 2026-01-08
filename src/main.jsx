import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Preloader from './components/Preloader.jsx'
import 'animate.css';
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <Navbar />
    <div className="container mx-auto p-16">
      <App />
    </div>
    <Footer />
  </StrictMode>,
)
