import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Button from '../ui/Button';

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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
          <Button 
  to="/login" 
  variant="accent" 
  size="sm"
  style={{ marginTop: '1rem' }}
>
  Login
</Button>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>© {currentYear} Portfolio. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
