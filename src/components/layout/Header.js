import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLock } from 'react-icons/fa';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  background-color: ${props => props.scrolled ? props.theme.colors.navBackground : (props.theme.themeMode === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
  box-shadow: ${props => props.scrolled ? props.theme.shadows.sm : (props.theme.themeMode === 'light' ? '0 4px 30px rgba(0, 0, 0, 0.05)' : '0 4px 30px rgba(0, 0, 0, 0.2)')};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'blur(5px)'};
  border-bottom: ${props => props.scrolled ? 'none' : `1px solid ${props.theme.themeMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`};
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
  color: ${props => {
    // Use black in light theme, white in dark theme
    const { themeMode } = props.theme;
    if (themeMode === 'light') {
      return props.scrolled ? props.theme.colors.text : '#000000';
    } else {
      return props.scrolled ? props.theme.colors.text : props.theme.colors.lightText;
    }
  }};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  margin: 0 0.5rem;
  color: ${props => {
    // Use black in light theme, white in dark theme
    const { themeMode } = props.theme;
    if (themeMode === 'light') {
      return props.scrolled ? props.theme.colors.text : '#000000';
    } else {
      return props.scrolled ? props.theme.colors.text : props.theme.colors.lightText;
    }
  }};
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color ${props => props.theme.transitions.fast}, transform 0.3s ease;
  
  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
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
  color: ${props => {
    // Use black in light theme, white in dark theme
    const { themeMode } = props.theme;
    if (themeMode === 'light') {
      return props.scrolled ? props.theme.colors.text : '#000000';
    } else {
      return props.scrolled ? props.theme.colors.text : props.theme.colors.lightText;
    }
  }};
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
  backdrop-filter: ${props => props.theme.glassEffect.backdropFilter};
  border-left: ${props => props.theme.glassEffect.border};
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const MobileNavLink = styled(Link)`
  margin: 1rem 0;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
    transform: translateX(5px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(90deg);
  }
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

// Styled component for the login button with popup functionality
const LoginButton = styled(Button)`
  background-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.themeMode === 'light' ? props.theme.colors.text : props.theme.colors.lightText};
  border: none;
  cursor: not-allowed;
  opacity: 0.8;
  
  &:hover {
    transform: none;
    box-shadow: none;
    opacity: 1;
  }
`;

// Popup component for login message
const LoginPopup = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  z-index: 1000;
  text-align: center;
  max-width: 90%;
  width: 400px;
`;

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

// Styled component for the controls container (theme toggle + login)
const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
`;

// Mobile controls container
const MobileNavControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  // Get theme mode from context
  const { themeMode } = useTheme();
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
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
  
  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };
  
  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };
  
  // Add data attribute for theme-specific styling
  useEffect(() => {
    // This ensures themeMode is used and prevents the unused variable warning
    console.log(`Current theme mode: ${themeMode}`);
  }, [themeMode]);

  return (
    <HeaderContainer scrolled={scrolled} data-theme={themeMode}>
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
          >
            Submit Query
          </Button>
          
          <NavControls>
            <ThemeToggle />
            <LoginButton 
              size="sm"
              onClick={handleLoginClick}
            >
              <FaLock size={12} />
              Login
            </LoginButton>
          </NavControls>
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
                
                <MobileNavControls>
                  <ThemeToggle />
                  <LoginButton 
                    size="sm"
                    onClick={handleLoginClick}
                  >
                    <FaLock size={12} />
                    Login
                  </LoginButton>
                </MobileNavControls>
              </MobileNavLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showLoginPopup && (
          <>
            <PopupOverlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLoginPopup}
            />
            <LoginPopup
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <h3>Admin Access Only</h3>
              <p>The login section is restricted to administrators only.</p>
              <Button 
                variant="accent" 
                size="sm"
                onClick={closeLoginPopup}
                style={{ marginTop: '1rem' }}
              >
                Close
              </Button>
            </LoginPopup>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
