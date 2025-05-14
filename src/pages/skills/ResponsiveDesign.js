import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMobile, FaTabletAlt, FaDesktop, FaGithub } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
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

const DeviceShowcase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const Device = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  svg {
    font-size: 4rem;
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.primary};
  }
  
  h3 {
    margin-bottom: ${props => props.theme.spacing.sm};
  }
  
  p {
    max-width: 250px;
    margin-bottom: 0;
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.glassEffect.background};
  backdrop-filter: ${props => props.theme.glassEffect.backdropFilter};
  border: ${props => props.theme.glassEffect.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.lg};
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

const ResponsiveDesign = () => {
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
  
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Responsive Design
          </PageTitle>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Creating websites that look and function perfectly on all devices
          </motion.p>
        </PageHeader>
        
        <ContentSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Responsive Design Philosophy
          </SectionTitle>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              In today's multi-device world, responsive design isn't just a nice-to-have—it's essential. I believe in creating websites that provide an optimal viewing and interaction experience across a wide range of devices, from desktop monitors to smartphones.
            </p>
            <p>
              My approach to responsive design focuses on fluid layouts, flexible images, and CSS media queries. I design with a mobile-first mindset, ensuring that the core experience is excellent on smaller screens before enhancing it for larger ones.
            </p>
          </Card>
          
          <DeviceShowcase>
            <Device
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaMobile />
              <h3>Mobile</h3>
              <p>Optimized for touch interactions and smaller screens with streamlined content.</p>
            </Device>
            
            <Device
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaTabletAlt />
              <h3>Tablet</h3>
              <p>Enhanced layouts that take advantage of additional screen real estate.</p>
            </Device>
            
            <Device
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FaDesktop />
              <h3>Desktop</h3>
              <p>Full-featured experiences with advanced interactions and layouts.</p>
            </Device>
          </DeviceShowcase>
        </ContentSection>
        
        <ContentSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Key Responsive Design Features
          </SectionTitle>
          
          <FeatureGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3>
                <MdDevices />
                Fluid Layouts
              </h3>
              <p>
                I use flexible grid systems and relative units (%, em, rem) to create layouts that adapt seamlessly to any screen size, ensuring content is always properly displayed.
              </p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3>
                <MdDevices />
                Media Queries
              </h3>
              <p>
                I strategically implement CSS media queries to apply different styles based on device characteristics like screen width, height, and orientation.
              </p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3>
                <MdDevices />
                Flexible Images
              </h3>
              <p>
                All images are optimized to scale within their containing elements, with proper art direction for different screen sizes to ensure fast loading and visual quality.
              </p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3>
                <MdDevices />
                Touch-Friendly Interfaces
              </h3>
              <p>
                I design with touch in mind, ensuring tap targets are appropriately sized and spaced for easy interaction on touchscreens.
              </p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h3>
                <MdDevices />
                Performance Optimization
              </h3>
              <p>
                I optimize assets and code to ensure fast loading times on mobile networks, using techniques like lazy loading and code splitting.
              </p>
            </FeatureCard>
            
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3>
                <MdDevices />
                Responsive Typography
              </h3>
              <p>
                Text remains readable across all devices with fluid typography systems that scale proportionally with viewport size.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </ContentSection>
        
        <ContentSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Responsive Projects
          </SectionTitle>
          
          <RepoGrid>
            <RepoCard 
              href="https://github.com/piyushsingh022/responsive-ecommerce" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h3>
                <FaGithub />
                Responsive E-commerce
              </h3>
              <p>A fully responsive e-commerce website with optimized product browsing experience across all devices.</p>
              <div className="tech-stack">
                <span className="tech">HTML5</span>
                <span className="tech">CSS Grid</span>
                <span className="tech">Flexbox</span>
                <span className="tech">JavaScript</span>
              </div>
            </RepoCard>
            
            <RepoCard 
              href="https://github.com/piyushsingh022/adaptive-news" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <h3>
                <FaGithub />
                Adaptive News Portal
              </h3>
              <p>A news website with content prioritization and layout adaptation based on device capabilities.</p>
              <div className="tech-stack">
                <span className="tech">React</span>
                <span className="tech">CSS Media Queries</span>
                <span className="tech">Styled Components</span>
                <span className="tech">Progressive Loading</span>
              </div>
            </RepoCard>
            
            <RepoCard 
              href="https://github.com/piyushsingh022/mobile-first-portfolio" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <h3>
                <FaGithub />
                Mobile-First Portfolio
              </h3>
              <p>A portfolio website built with a mobile-first approach, progressively enhancing for larger screens.</p>
              <div className="tech-stack">
                <span className="tech">HTML5</span>
                <span className="tech">SASS</span>
                <span className="tech">Mobile-First Design</span>
                <span className="tech">Progressive Enhancement</span>
              </div>
            </RepoCard>
          </RepoGrid>
        </ContentSection>
        
        <BackLink to="/">← Back to Home</BackLink>
      </Container>
    </PageContainer>
  );
};

export default ResponsiveDesign;
