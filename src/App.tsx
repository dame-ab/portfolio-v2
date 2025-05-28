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
import { ModeToggle } from './components/mode-toggle';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <div className="space-y-20">
              <Hero />
              <About />
              <Projects />
              <Contact />
            </div>
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <div className="pt-20">
              <About />
            </div>
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <div className="pt-20">
              <Projects />
            </div>
          </PageTransition>
        } />
        <Route path="/ai" element={
          <PageTransition>
            <div className="pt-20">
              <Chatbot />
            </div>
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <div className="pt-20">
              <Contact />
            </div>
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Router>
      <ScrollToTop />
      <div className="relative flex flex-col min-h-screen bg-background text-foreground">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
