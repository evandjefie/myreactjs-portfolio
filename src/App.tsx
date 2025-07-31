import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import About from './components/About';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Initialize smooth scrolling
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        smoothScroll(target.getAttribute('href')!);
      }
    });

    // Set up scroll-triggered animations
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero isDark={isDark} />
        <Problems isDark={isDark} />
        <Solution isDark={isDark} />
        <Pricing isDark={isDark} />
        <About isDark={isDark} />
        <Portfolio isDark={isDark} />
        <FAQ isDark={isDark} />
        <Contact isDark={isDark} />
        <ScrollToTop isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;