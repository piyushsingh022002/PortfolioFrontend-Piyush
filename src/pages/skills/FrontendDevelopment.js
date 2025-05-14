import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGithub } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiStyledcomponents } from 'react-icons/si';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: ${props => props.theme.spacing['3xl']} 0;
  background-color: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const PageTitle = styled(motion.h1)`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

const ContentSection = styled.section`
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const SectionTitle = styled(motion.h2)`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Card = styled(motion.div)`
  background: ${props => props.theme.glassEffect.background};
  backdrop-filter: ${props => props.theme.glassEffect.backdropFilter};
  border: ${props => props.theme.glassEffect.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.glass};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.xl} 0;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const IconItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacing.md};
  
  svg {
    font-size: 2.5rem;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    margin-bottom: 0;
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const RepoCard = styled(motion.a)`
  display: block;
  background: ${props => props.theme.glassEffect.background};
  backdrop-filter: ${props => props.theme.glassEffect.backdropFilter};
  border: ${props => props.theme.glassEffect.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
  
  h3 {
    display: flex;
    align-items: center;
    margin-bottom: ${props => props.theme.spacing.md};
    
    svg {
      margin-right: ${props => props.theme.spacing.sm};
      color: ${props => props.theme.colors.primary};
    }
  }
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: ${props => props.theme.spacing.md};
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing.xs};
  }
  
  .tech {
    font-size: ${props => props.theme.fontSizes.xs};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.lightText};
    padding: 4px 8px;
    border-radius: ${props => props.theme.borderRadius.sm};
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FrontendDevelopment = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frontend Development
          </PageTitle>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Creating beautiful, interactive, and user-friendly interfaces
          </motion.p>
        </PageHeader>
        
        <ContentSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Approach
          </SectionTitle>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              As a frontend developer, I specialize in creating intuitive and engaging user interfaces that provide exceptional user experiences. I believe that great frontend development is about finding the perfect balance between aesthetics, functionality, and performance.
            </p>
            <p>
              My approach focuses on component-based architecture, state management, and responsive design principles. I'm passionate about creating accessible interfaces that work for all users, regardless of their device or abilities.
            </p>
          </Card>
        </ContentSection>
        
        <ContentSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Frontend Technologies
          </SectionTitle>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <p>I work with modern frontend technologies and frameworks:</p>
              
              <IconGrid>
                <IconItem variants={fadeInUp}>
                  <FaReact />
                  <p>React</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaJs />
                  <p>JavaScript</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <SiTypescript />
                  <p>TypeScript</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaHtml5 />
                  <p>HTML5</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaCss3Alt />
                  <p>CSS3</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <SiRedux />
                  <p>Redux</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <SiStyledcomponents />
                  <p>Styled Components</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaReact />
                  <p>Next.js</p>
                </IconItem>
              </IconGrid>
            </motion.div>
          </Card>
        </ContentSection>
        
        <ContentSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Frontend Projects
          </SectionTitle>
          
          <RepoGrid>
            <RepoCard 
              href="https://github.com/piyushsingh022/react-dashboard" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3>
                <FaGithub />
                React Dashboard
              </h3>
              <p>A responsive admin dashboard with dark/light theme, charts, and data visualization.</p>
              <div className="tech-stack">
                <span className="tech">React</span>
                <span className="tech">Context API</span>
                <span className="tech">Styled Components</span>
                <span className="tech">Chart.js</span>
              </div>
            </RepoCard>
            
            <RepoCard 
              href="https://github.com/piyushsingh022/portfolio-site" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3>
                <FaGithub />
                Portfolio Website
              </h3>
              <p>A modern portfolio website with animations, responsive design, and theme switching.</p>
              <div className="tech-stack">
                <span className="tech">React</span>
                <span className="tech">Framer Motion</span>
                <span className="tech">Styled Components</span>
                <span className="tech">React Router</span>
              </div>
            </RepoCard>
            
            <RepoCard 
              href="https://github.com/piyushsingh022/react-music-player" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3>
                <FaGithub />
                React Music Player
              </h3>
              <p>A feature-rich music player with playlist management, audio visualization, and keyboard shortcuts.</p>
              <div className="tech-stack">
                <span className="tech">React</span>
                <span className="tech">Redux</span>
                <span className="tech">Web Audio API</span>
                <span className="tech">CSS Modules</span>
              </div>
            </RepoCard>
          </RepoGrid>
        </ContentSection>
        
        <BackLink to="/">← Back to Home</BackLink>
      </Container>
    </PageContainer>
  );
};

export default FrontendDevelopment;
