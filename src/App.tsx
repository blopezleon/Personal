import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { VscHome, VscPerson, VscCode, VscMail } from 'react-icons/vsc';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Dock from './components/Dock';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');

  // Enable scrolling only for the About section
  useEffect(() => {
    document.body.style.overflow = currentSection === 'about' ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [currentSection]);

  const items = [
    { 
      icon: VscHome({ size: 24 }), 
      label: 'Home', 
      onClick: () => setCurrentSection('home')
    },
    { 
      icon: VscPerson({ size: 24 }), 
      label: 'About', 
      onClick: () => setCurrentSection('about')
    },
    { 
      icon: VscCode({ size: 24 }), 
      label: 'Projects', 
      onClick: () => setCurrentSection('projects')
    },
    { 
      icon: VscMail({ size: 24 }), 
      label: 'Contact', 
      onClick: () => setCurrentSection('contact')
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        className="App"
        sx={{
          height: currentSection === 'about' ? 'auto' : '100vh',
          overflow: currentSection === 'about' ? 'visible' : 'hidden',
          position: 'relative',
        }}
      >
        <AnimatePresence mode="wait">
          {currentSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ height: '100vh' }}
            >
              <Hero />
            </motion.div>
          )}
          {currentSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ height: 'auto', minHeight: '200vh' }}
            >
              <About />
            </motion.div>
          )}
          {currentSection === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ height: '100vh' }}
            >
              <Projects />
            </motion.div>
          )}
          {currentSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ height: '100vh' }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
