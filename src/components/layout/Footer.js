import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaLock } from 'react-icons/fa';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  padding: ${props => props.theme.spacing['2xl']} 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: ${props => props.theme.spacing.md};
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const FooterDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FooterHeading = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spacing.sm};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.grey};
  font-size: 1.5rem;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.spacing['2xl']};
  padding-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes.sm};
`;

// Login popup components (same as in Header.js)
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

// Login button with not-allowed cursor
const LoginButton = styled(Button)`
  cursor: not-allowed;
  
  &:hover {
    transform: none;
    box-shadow: none;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  
  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };
  
  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo to="/">Portfolio</FooterLogo>
          <FooterDescription>
            A showcase of my work, skills, and accomplishments. 
            Feel free to explore and get in touch if you'd like to collaborate.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://github.com/piyushsingh022002" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="www.linkedin.com/in/piyushsingh02" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="mailto:contact@example.com">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Contact</FooterHeading>
          <FooterDescription>
            Have a question or want to work together?
          </FooterDescription>
          <Button 
            to="/query" 
            variant="accent" 
            size="sm"
          >
            Submit Query
          </Button>
          <Button 
            to="/feedback" 
            variant="secondary" 
            size="sm"
            style={{ marginTop: '1rem' }}
          >
            Leave Feedback
          </Button>
          <LoginButton 
            variant="accent" 
            size="sm"
            style={{ marginTop: '1rem' }}
            onClick={handleLoginClick}
          >
            <FaLock size={12} style={{ marginRight: '5px' }} />
            Login
          </LoginButton>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>© {currentYear} Portfolio. All rights reserved.</p>
      </Copyright>
      
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
    </FooterContainer>
  );
};

export default Footer;
