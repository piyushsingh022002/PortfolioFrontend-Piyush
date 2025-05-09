import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import Button from '../components/ui/Button';

const ProjectsSection = styled.section`
  padding: ${props => props.theme.spacing['3xl']} 0;
  background-color: ${props => props.theme.colors.background};
`;

const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  position: relative;
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing.xl};
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

const ProjectsDescription = styled.p`
  max-width: 800px;
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.25rem;
  background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.lightText : props.theme.colors.text};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : '#e1e1e1'};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.primary + '10'};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 1px solid #e1e1e1;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.md};
  transition: border-color ${props => props.theme.transitions.fast}, box-shadow ${props => props.theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}33;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.grey};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform ${props => props.theme.transitions.normal}, box-shadow ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.secondary};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  background-color: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  width: 100%;
`;

const NoResultsTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const NoResultsDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
`;

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    image: 'https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'fullstack',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and team collaboration with real-time updates.',
    image: 'https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg',
    tags: ['React', 'Firebase', 'Material UI', 'Redux'],
    category: 'frontend',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 3,
    title: 'Travel Blog',
    description: 'A responsive travel blog with content management system, user authentication, and interactive maps.',
    image: 'https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data and forecasts for locations worldwide.',
    image: 'https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg',
    tags: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
    category: 'frontend',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 5,
    title: 'Fitness Tracker API',
    description: 'A RESTful API for tracking workouts, nutrition, and fitness goals with detailed analytics.',
    image: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'backend',
    github: 'https://github.com',
    demo: null
  },
  {
    id: 6,
    title: 'Real Estate Listings',
    description: 'A platform for browsing, searching, and listing properties with map integration and filtering options.',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    category: 'fullstack',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredProjects = projectsData.filter(project => {
    // Filter by category
    const categoryMatch = activeFilter === 'all' || project.category === activeFilter;
    
    // Filter by search query
    const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });
  
  return (
    <ProjectsSection>
      <ProjectsContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>My Projects</SectionTitle>
          <ProjectsDescription>
            Here's a collection of my recent work. Each project represents a unique challenge and solution.
            Feel free to explore and check out the live demos or code repositories.
          </ProjectsDescription>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FilterContainer>
            <FilterButton 
              active={activeFilter === 'all'} 
              onClick={() => handleFilterChange('all')}
            >
              All Projects
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'frontend'} 
              onClick={() => handleFilterChange('frontend')}
            >
              Frontend
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'backend'} 
              onClick={() => handleFilterChange('backend')}
            >
              Backend
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'fullstack'} 
              onClick={() => handleFilterChange('fullstack')}
            >
              Full Stack
            </FilterButton>
          </FilterContainer>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              type="text" 
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </SearchContainer>
        </motion.div>
        
        {filteredProjects.length > 0 ? (
          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.map((tag, i) => (
                      <ProjectTag key={i}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                  <ProjectLinks>
                    <Button 
                      href={project.github} 
                      variant="secondary"
                      size="sm"
                      icon={<FaGithub />}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </Button>
                    {project.demo && (
                      <Button 
                        href={project.demo} 
                        variant="primary"
                        size="sm"
                        icon={<FaExternalLinkAlt />}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        ) : (
          <NoResults>
            <NoResultsTitle>No projects found</NoResultsTitle>
            <NoResultsDescription>
              Try adjusting your search or filter criteria to find what you're looking for.
            </NoResultsDescription>
            <Button 
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              variant="primary"
            >
              Clear Filters
            </Button>
          </NoResults>
        )}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
