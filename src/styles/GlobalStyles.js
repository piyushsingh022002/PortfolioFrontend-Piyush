import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&family=Roboto+Mono&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.7;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    margin-bottom: ${theme.spacing.md};
    line-height: 1.3;
  }
  
  h1 {
    font-size: ${theme.fontSizes['5xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['4xl']};
    }
  }
  
  h2 {
    font-size: ${theme.fontSizes['3xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['2xl']};
    }
  }
  
  h3 {
    font-size: ${theme.fontSizes['2xl']};
  }
  
  p {
    margin-bottom: ${theme.spacing.md};
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.accent};
    }
  }
  
  button {
    font-family: ${theme.fonts.main};
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  ul, ol {
    list-style-position: inside;
    margin-bottom: ${theme.spacing.md};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  section {
    padding: ${theme.spacing['3xl']} 0;
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing['2xl']} 0;
    }
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }
  
  .section-title {
    position: relative;
    display: inline-block;
    margin-bottom: ${theme.spacing['2xl']};
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: ${theme.colors.accent};
    }
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-right {
    text-align: right;
  }
  
  .flex {
    display: flex;
  }
  
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .grid {
    display: grid;
  }
  
  .hidden {
    display: none;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export default GlobalStyles;
