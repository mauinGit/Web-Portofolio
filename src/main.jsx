import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Preloader from './components/Preloader.jsx'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true,
  easing: 'ease-out-cubic',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <Navbar />
    <main className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
      <App />
    </main>
    <Footer />
  </StrictMode>,
)
