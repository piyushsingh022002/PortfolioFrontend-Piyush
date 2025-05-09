import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../components/ui/Button';
import myDeveloper from '../assets/images/developer.webp';

const AboutSection = styled.section`
  padding: ${props => props.theme.spacing['3xl']} 0;
  background-color: ${props => props.theme.colors.background};
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  position: relative;
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.secondary};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: ${props => props.theme.borderRadius.lg};
    box-shadow: ${props => props.theme.shadows.lg};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: -1;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  background-color: white;
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.md};
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatTitle = styled.p`
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
`;

const SkillsSection = styled.div`
  margin: 4rem 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
`;

const SkillCategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  
  svg {
    margin-right: 0.75rem;
    color: ${props => props.theme.colors.primary};
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillName = styled.h4`
  font-size: ${props => props.theme.fontSizes.md};
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const SkillBar = styled.div`
  height: 8px;
  background-color: #f1f1f1;
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  width: ${props => props.width}%;
  border-radius: ${props => props.theme.borderRadius.full};
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  padding: 3rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  color: white;
  margin-top: 4rem;
`;

const CTATitle = styled.h2`
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

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

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>
        
        <AboutContent>
          <AboutText>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.p variants={fadeInUp}>
                Hello! I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems that deliver exceptional user experiences.
              </motion.p>
              
              <motion.p variants={fadeInUp}>
                My journey in web development began during my university years, where I discovered my passion for coding. Since then, I've worked with various technologies and frameworks, constantly expanding my knowledge and skills to stay at the forefront of this ever-evolving field.
              </motion.p>
              
              <motion.p variants={fadeInUp}>
                I believe in writing clean, maintainable code and following best practices. My approach to development is focused on creating solutions that not only meet the current requirements but are also scalable and adaptable to future needs.
              </motion.p>
              
              <motion.p variants={fadeInUp}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community forums. I'm also an avid hiker and enjoy spending time outdoors, which helps me maintain a healthy work-life balance.
              </motion.p>
            </motion.div>
          </AboutText>
          
          <AboutImage>
            <motion.img 
              src={myDeveloper} 
              alt="Developer working"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </AboutImage>
        </AboutContent>
        
        <StatsContainer>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <StatNumber>Intern</StatNumber>
            <StatTitle>Years Experience</StatTitle>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatNumber>30+</StatNumber>
            <StatTitle>Projects Completed</StatTitle>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StatNumber>Will grab Soon!</StatNumber>
            <StatTitle>Happy Clients</StatTitle>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StatNumber>10+</StatNumber>
            <StatTitle>Technologies</StatTitle>
          </StatItem>
        </StatsContainer>
        
        <SkillsSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>My Skills</SectionTitle>
          </motion.div>
          
          <SkillsGrid>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SkillCategory>
                <SkillCategoryTitle>
                  <FaCode /> Frontend Development
                </SkillCategoryTitle>
                <SkillList>
                  <SkillItem>
                    <SkillName>React.js</SkillName>
                    <SkillBar>
                      <SkillProgress width={95} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>JavaScript / TypeScript</SkillName>
                    <SkillBar>
                      <SkillProgress width={90} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>HTML5 / CSS3</SkillName>
                    <SkillBar>
                      <SkillProgress width={95} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>Styled Components</SkillName>
                    <SkillBar>
                      <SkillProgress width={85} />
                    </SkillBar>
                  </SkillItem>
                </SkillList>
              </SkillCategory>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SkillCategory>
                <SkillCategoryTitle>
                  <FaServer /> Backend Development
                </SkillCategoryTitle>
                <SkillList>
                  <SkillItem>
                    <SkillName>Node.js / Express</SkillName>
                    <SkillBar>
                      <SkillProgress width={90} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>.Net Core / WebAPIs</SkillName>
                    <SkillBar>
                      <SkillProgress width={80} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>RESTful APIs</SkillName>
                    <SkillBar>
                      <SkillProgress width={95} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>GraphQL</SkillName>
                    <SkillBar>
                      <SkillProgress width={75} />
                    </SkillBar>
                  </SkillItem>
                </SkillList>
              </SkillCategory>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <SkillCategory>
                <SkillCategoryTitle>
                  <FaDatabase /> Database & DevOps
                </SkillCategoryTitle>
                <SkillList>
                  <SkillItem>
                    <SkillName>MongoDB</SkillName>
                    <SkillBar>
                      <SkillProgress width={85} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>PostgreSQL</SkillName>
                    <SkillBar>
                      <SkillProgress width={80} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>Docker</SkillName>
                    <SkillBar>
                      <SkillProgress width={75} />
                    </SkillBar>
                  </SkillItem>
                  <SkillItem>
                    <SkillName>Azure Data Studio</SkillName>
                    <SkillBar>
                      <SkillProgress width={80} />
                    </SkillBar>
                  </SkillItem>
                </SkillList>
              </SkillCategory>
            </motion.div>
          </SkillsGrid>
        </SkillsSection>
        
        <CTASection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CTATitle>Let's Connect</CTATitle>
            <CTAText>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me through social media or by submitting a query.
            </CTAText>
            <SocialButtonsContainer>
              <Button 
                href="https://github.com/piyushsingh022002" 
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaGithub />}
              >
                GitHub
              </Button>
              <Button 
                href="www.linkedin.com/in/piyushsingh02" 
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
              <Button 
                to="/query" 
                variant="accent"
              >
                Submit a Query
              </Button>
            </SocialButtonsContainer>
          </motion.div>
        </CTASection>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
