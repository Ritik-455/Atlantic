import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Hero from './components/Hero';
import Poinner from './components/Poinner';
import Approvals from './components/Approvals';
import About from './components/About';
import Blog from './components/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, });
  }, []);
  return (
    <>
      <Hero />
      <Poinner />
      <Approvals />
      <About />
      <Blog />
    </>
  );
}

export default App;
