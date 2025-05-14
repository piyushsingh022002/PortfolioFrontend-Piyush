import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
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

const WebDevelopment = () => {
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
            Web Development
          </PageTitle>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building modern, responsive, and user-friendly web applications
          </motion.p>
        </PageHeader>
        
        <ContentSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Experience
          </SectionTitle>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              With over 5 years of experience in web development, I've worked on a variety of projects ranging from small business websites to complex web applications. My expertise includes both frontend and backend development, allowing me to create full-stack solutions that meet client needs.
            </p>
            <p>
              I focus on creating clean, maintainable code that follows best practices and industry standards. My approach emphasizes user experience, performance optimization, and responsive design to ensure websites work flawlessly across all devices.
            </p>
          </Card>
        </ContentSection>
        
        <ContentSection>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Technologies I Work With
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
              <p>I'm proficient in a wide range of web development technologies:</p>
              
              <IconGrid>
                <IconItem variants={fadeInUp}>
                  <FaCode />
                  <p>HTML5/CSS3</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaCode />
                  <p>JavaScript</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaCode />
                  <p>React.js</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaCode />
                  <p>Node.js</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaServer />
                  <p>Express.js</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaDatabase />
                  <p>MongoDB</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaDatabase />
                  <p>SQL</p>
                </IconItem>
                <IconItem variants={fadeInUp}>
                  <FaCode />
                  <p>GraphQL</p>
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
            Featured Projects
          </SectionTitle>
          
          <RepoGrid>
            <RepoCard 
              href="https://reactjs.org/docs/getting-started.html" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3>
                <FaReact />
                React Documentation
              </h3>
              <p>Official React documentation with tutorials, guides, and API references for building user interfaces.</p>
              <div className="tech-stack">
                <span className="tech">React</span>
                <span className="tech">JavaScript</span>
                <span className="tech">JSX</span>
                <span className="tech">Hooks</span>
              </div>
            </RepoCard>
            
            <RepoCard 
              href="https://nodejs.org/en/docs/" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3>
                <FaNodeJs />
                Node.js Documentation
              </h3>
              <p>Comprehensive documentation for Node.js, including guides, API references, and best practices.</p>
              <div className="tech-stack">
                <span className="tech">Node.js</span>
                <span className="tech">JavaScript</span>
                <span className="tech">Server-side</span>
                <span className="tech">APIs</span>
              </div>
            </RepoCard>
            
            <RepoCard 
              href="https://developer.mozilla.org/en-US/docs/Web" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3>
                <FaCode />
                MDN Web Docs
              </h3>
              <p>Mozilla Developer Network's comprehensive resource for web developers with tutorials and references.</p>
              <div className="tech-stack">
                <span className="tech">HTML</span>
                <span className="tech">CSS</span>
                <span className="tech">JavaScript</span>
                <span className="tech">Web APIs</span>
              </div>
            </RepoCard>
          </RepoGrid>
        </ContentSection>
        
        <BackLink to="/">← Back to Home</BackLink>
      </Container>
    </PageContainer>
  );
};

export default WebDevelopment;
