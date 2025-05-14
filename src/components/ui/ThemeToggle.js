import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const ToggleContainer = styled.button`
  background: ${props => props.theme.glassEffect.background};
  color: ${props => props.theme.colors.text};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  position: relative;
  width: 60px;
  height: 30px;
  border: ${props => props.theme.glassEffect.border};
  backdrop-filter: ${props => props.theme.glassEffect.backdropFilter};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  
  svg {
    height: 15px;
    width: 15px;
    z-index: 1;
    color: ${props => props.theme.colors.text};
  }
`;

const SunIcon = styled(FaSun)`
  color: #f9d71c;
`;

const MoonIcon = styled(FaMoon)`
  color: #f5f3ce;
`;

const Ball = styled(motion.div)`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  transition: transform 0.3s ease;
`;

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();
  
  return (
    <ToggleContainer onClick={toggleTheme} aria-label="Toggle dark mode">
      <Icons>
        <SunIcon />
        <MoonIcon />
      </Icons>
      <Ball 
        animate={{ 
          x: themeMode === 'dark' ? 30 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      />
    </ToggleContainer>
  );
};

export default ThemeToggle;
