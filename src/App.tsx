// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import NotFound from './components/NotFound';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <div className="space-y-0">
              <div id="hero"><Hero /></div>
              <div id="about"><About /></div>
              <div id="projects"><Projects /></div>
              <div id="ai"><Chatbot /></div>
              <div id="contact"><Contact /></div>
            </div>
          </PageTransition>
        } />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/ai" element={<PageTransition><Chatbot /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
