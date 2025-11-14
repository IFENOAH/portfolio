import './App.css';
import { useState, useEffect } from 'react';
import AboutPage from './components/AboutPage/AboutPage';
import HeroPage from './components/HeroPage/HeroPage';
// import Navbar from './components/Navbar/Navbar';
import Projects from './components/ProjectsPage/Projects';
import StackPage from './components/StackPage/StackPage';
// import Aos from 'aos';
import 'aos/dist/aos.css';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import Interests from './components/Interests/Interests';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for all images and content to load
    const loadImages = () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve); // Resolve even on error to not block
        });
      });

      return Promise.all(imagePromises);
    };

    // Wait for window load and images
    const handleLoad = async () => {
      // Small delay to ensure DOM is ready
      await new Promise(resolve => setTimeout(resolve, 500));
      await loadImages();
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);

  return (
    <div className="App">
      <Loader isLoading={isLoading} />
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.6s ease-in' }}>
        <HeroPage />
        <Projects />
        <AboutPage />
        <StackPage />
        <Interests />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
