import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaLaptop, FaMobile } from 'react-icons/fa';
import Button from '../components/ui/Button';
import yourImage from '../assets/images/Screenshot.png';
import personIcon from '../assets/images/images.png';
import { keyframes } from 'styled-components';

// Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary} 0%, ${props => props.theme.colors.primary} 100%);
  color: ${props => props.theme.colors.lightText};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: 2;
  }
`;

// const HeroImage = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     order: 1;
//   }
  
//   img {
//     max-width: 100%;
//     height: auto;
//     filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.2));
//   }
// `;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px; /* Adjust the size of the circular container */
  height: 450px; /* Adjust the size of the circular container */
  border-radius: 50%;
  border: 5px solid ${props => props.theme.colors.primary}; /* Themed border */
  box-shadow: ${props => props.theme.shadows.lg};
  overflow: hidden; /* Ensure the image fits nicely inside the circle */
  position: relative; /* Stack images on top of each other */
  transition: all 0.5s ease-in-out;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 250px;
    height: 250px;
  }

  /* Image styling */
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out; /* Smooth transition */
  }
`;
const typeWriter = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;
const HeroHeading = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  span {
    color: ${props => props.theme.colors.accent};
    display: block;
    position: relative;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    width: 0; /* Start with width 0 for typewriter effect */
    animation: ${typeWriter} 3s steps(30) 1s forwards; /* Typewriter animation */
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`;

// About Section
const AboutSection = styled.section`
  padding: ${props => props.theme.spacing['3xl']} 0;
  background-color: ${props => props.theme.colors.background};
`;

const AboutContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
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

// Services Section
const ServicesSection = styled.section`
  padding: ${props => props.theme.spacing['3xl']} 0;
  background-color: ${props => props.theme.colors.background};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
  }
`;

const ServicesContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${props => props.theme.glassEffect.background};
  backdrop-filter: ${props => props.theme.glassEffect.backdropFilter};
  border: ${props => props.theme.glassEffect.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2.5rem 2rem;
  box-shadow: ${props => props.theme.shadows.glass};
  transition: all ${props => props.theme.transitions.normal};
  text-align: left;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
`;

// CTA Section
const CTASection = styled.section`
  padding: ${props => props.theme.spacing['3xl']} 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent} 0%, ${props => props.theme.colors.primary} 100%);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['4xl']};
  margin-bottom: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const CTADescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: 2.5rem;
  opacity: 0.9;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const [imageState, setImageState] = useState({
    personIconOpacity: 1,
    originalImageOpacity: 0
  });
  
  // Hero image transition effect
  useEffect(() => {
    // Show placeholder for 3 seconds, then fade to actual image
    const timer = setTimeout(() => {
      setImageState({
        personIconOpacity: 0,
        originalImageOpacity: 1
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroHeading
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm <span>Piyush Singh</span>
              Full Stack Developer
            </HeroHeading>
            <HeroSubheading
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I build exceptional digital experiences that make life simpler and more enjoyable.
            </HeroSubheading>
            <HeroButtons
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                to="/projects" 
                variant="accent"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                View My Work
              </Button>
              <Button 
                to="/contact" 
                variant="secondary"
              >
                Get In Touch
              </Button>
            </HeroButtons>
          </HeroText>
          <HeroImage>
      {/* Person Icon initially */}
      <motion.img
        src={personIcon}
        alt="Person Icon"
        initial={{ opacity: 0 }}
        animate={{ opacity: imageState.personIconOpacity }}
        transition={{ duration: 1 }}
        style={{ opacity: imageState.personIconOpacity }}
      />
      
      {/* Original Image */}
      <motion.img
        src={yourImage}
        alt="Piyush Singh"
        initial={{ opacity: 0 }}
        animate={{ opacity: imageState.originalImageOpacity }}
        transition={{ duration: 1 }}
        style={{ opacity: imageState.originalImageOpacity }}
      />
    </HeroImage>
        </HeroContent>
      </HeroSection>
      
      <AboutSection>
        <AboutContent>
          <SectionTitle>About Me</SectionTitle>
          <AboutGrid>
            <AboutText>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.p variants={fadeInUp}>
                  I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  My journey in web development began 5 years ago, and since then, I've worked on a variety of projects ranging from e-commerce platforms to complex enterprise solutions. I'm constantly learning and adapting to new technologies to stay at the forefront of this ever-evolving field.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community forums.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Button 
                    to="/about" 
                    variant="primary"
                    icon={<FaArrowRight />}
                    iconPosition="right"
                    style={{ marginTop: '1rem' }}
                  >
                    More About Me
                  </Button>
                </motion.div>
              </motion.div>
            </AboutText>
            <AboutImage>
              <motion.img 
                src="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg" 
                alt="About Me"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </AboutImage>
          </AboutGrid>
        </AboutContent>
      </AboutSection>
      
      <ServicesSection>
        <ServicesContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle style={{ marginBottom: '1rem' }}>What I Do</SectionTitle>
            <p>Here are some of the services I offer to help bring your ideas to life.</p>
          </motion.div>
          
          <ServicesGrid>
            <ServiceCard
              as={Link}
              to="/skills/web-development"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <ServiceIcon>
                <FaCode />
              </ServiceIcon>
              <ServiceTitle>Web Development</ServiceTitle>
              <ServiceDescription>
                I build modern, responsive websites and web applications using the latest technologies and best practices.
              </ServiceDescription>
              <Button 
                as="div" 
                variant="text"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </ServiceCard>
            
            <ServiceCard
              as={Link}
              to="/skills/frontend-development"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <ServiceIcon>
                <FaLaptop />
              </ServiceIcon>
              <ServiceTitle>Frontend Development</ServiceTitle>
              <ServiceDescription>
                I create intuitive user interfaces with modern frameworks like React, ensuring a seamless user experience.
              </ServiceDescription>
              <Button 
                as="div" 
                variant="text"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </ServiceCard>
            
            <ServiceCard
              as={Link}
              to="/skills/responsive-design"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <ServiceIcon>
                <FaMobile />
              </ServiceIcon>
              <ServiceTitle>Responsive Design</ServiceTitle>
              <ServiceDescription>
                I ensure your website looks and functions perfectly on all devices, from desktops to smartphones.
              </ServiceDescription>
              <Button 
                as="div" 
                variant="text"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </ServiceCard>
          </ServicesGrid>
        </ServicesContent>
      </ServicesSection>
      
      <CTASection>
        <CTAContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CTATitle>Ready to Start Your Project?</CTATitle>
            <CTADescription>
              Let's work together to bring your ideas to life and create something amazing.
            </CTADescription>
            <CTAButtons>
              <Button 
                to="/contact" 
                variant="accent"
                size="lg"
              >
                Get In Touch
              </Button>
              <Button 
                to="/query" 
                variant="secondary"
                size="lg"
              >
                Submit a Query
              </Button>
            </CTAButtons>
          </motion.div>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Home;
