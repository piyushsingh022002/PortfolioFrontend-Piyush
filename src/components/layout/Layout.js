import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Main = styled(motion.main)`
  min-height: 100vh;
  padding-top: 80px; // To account for fixed header
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
