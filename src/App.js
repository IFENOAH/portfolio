import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import HeroPage from './components/HeroPage/HeroPage';
// import Navbar from './components/Navbar/Navbar';
import Projects from './components/ProjectsPage/Projects';
import StackPage from './components/StackPage/StackPage';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <div className="App">
      <HeroPage />
      <Projects />
      <AboutPage />
      <StackPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
