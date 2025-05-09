import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.normal};
  cursor: pointer;
  text-decoration: none;
  
  ${props => {
    if (props.variant === 'primary') {
      return css`
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.lightText};
        
        &:hover {
          background-color: ${props => props.theme.colors.secondary};
          transform: translateY(-3px);
          box-shadow: ${props => props.theme.shadows.md};
        }
      `;
    } else if (props.variant === 'secondary') {
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors.primary};
        border: 2px solid ${props => props.theme.colors.primary};
        
        &:hover {
          background-color: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.lightText};
          transform: translateY(-3px);
          box-shadow: ${props => props.theme.shadows.md};
        }
      `;
    } else if (props.variant === 'accent') {
      return css`
        background-color: ${props => props.theme.colors.accent};
        color: ${props => props.theme.colors.lightText};
        
        &:hover {
          background-color: ${props => props.theme.colors.secondary};
          transform: translateY(-3px);
          box-shadow: ${props => props.theme.shadows.md};
        }
      `;
    } else if (props.variant === 'text') {
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors.primary};
        padding: 0.5rem;
        
        &:hover {
          color: ${props => props.theme.colors.accent};
          transform: translateY(-2px);
        }
      `;
    }
  }}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.size === 'sm' && css`
    padding: 0.5rem 1rem;
    font-size: ${props => props.theme.fontSizes.sm};
  `}
  
  ${props => props.size === 'lg' && css`
    padding: 1rem 2rem;
    font-size: ${props => props.theme.fontSizes.lg};
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
  
  svg {
    margin-right: ${props => props.iconPosition === 'left' ? '0.5rem' : '0'};
    margin-left: ${props => props.iconPosition === 'right' ? '0.5rem' : '0'};
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}
`;

const StyledAnchor = styled.a`
  ${ButtonStyles}
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  to, 
  href, 
  icon, 
  iconPosition = 'left',
  ...props 
}) => {
  if (to) {
    return (
      <StyledLink 
        to={to} 
        variant={variant} 
        size={size} 
        fullWidth={fullWidth}
        iconPosition={iconPosition}
        {...props}
      >
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </StyledLink>
    );
  }
  
  if (href) {
    return (
      <StyledAnchor 
        href={href} 
        variant={variant} 
        size={size} 
        fullWidth={fullWidth}
        iconPosition={iconPosition}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </StyledAnchor>
    );
  }
  
  return (
    <StyledButton 
      variant={variant} 
      size={size} 
      fullWidth={fullWidth}
      iconPosition={iconPosition}
      {...props}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </StyledButton>
  );
};

export default Button;
