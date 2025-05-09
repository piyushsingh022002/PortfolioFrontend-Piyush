import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

// Theme and Global Styles
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Query from './pages/Query';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AnimatePresence mode="wait">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/query" element={<Query />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/login" element={<Login />} />

              <Route path="/dashboard" element={<Dashboard />} />

            </Routes>
          </Layout>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
