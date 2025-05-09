import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? props.theme.shadows.sm : 'none'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all ${props => props.theme.transitions.normal};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 700;
  color: ${props => props.scrolled ? props.theme.colors.secondary : props.theme.colors.secondary};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: ${props => props.scrolled ? props.theme.colors.text : props.theme.colors.text};
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? props.theme.colors.secondary : props.theme.colors.lightText};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.lg};
  padding: 2rem;
  z-index: 200;
  display: flex;
  flex-direction: column;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const MobileNavLink = styled(Link)`
  margin: 1rem 0;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 500;
  text-decoration: none;
  
  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <Logo to="/" scrolled={scrolled}>Piyush's Portfolio</Logo>
        
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''} scrolled={scrolled}>
            Home
          </NavLink>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''} scrolled={scrolled}>
            About
          </NavLink>
          <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''} scrolled={scrolled}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''} scrolled={scrolled}>
            Contact
          </NavLink>
          <Button 
            to="/query" 
            variant="accent" 
            size="sm" 
            style={{ marginLeft: '1rem' }}
          >
            Submit Query
          </Button>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu} scrolled={scrolled}>
          <FaBars />
        </MobileMenuButton>
      </HeaderContent>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <CloseButton onClick={() => setMobileMenuOpen(false)}>
                <FaTimes />
              </CloseButton>
              
              <MobileNavLinks>
                <MobileNavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                  About
                </MobileNavLink>
                <MobileNavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                  Projects
                </MobileNavLink>
                <MobileNavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  Contact
                </MobileNavLink>
                <Button 
                  to="/query" 
                  variant="accent" 
                  size="sm" 
                  style={{ marginTop: '1rem' }}
                  fullWidth
                >
                  Submit Query
                </Button>
              </MobileNavLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
