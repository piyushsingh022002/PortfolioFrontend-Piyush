import { createGlobalStyle } from 'styled-components';

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
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.7;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 600;
    margin-bottom: ${props => props.theme.spacing.md};
    line-height: 1.3;
    color: ${props => props.theme.colors.text};
    transition: color 0.3s ease;
  }
  
  h1 {
    font-size: ${props => props.theme.fontSizes['5xl']};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['4xl']};
    }
  }
  
  h2 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['2xl']};
    }
  }
  
  h3 {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
  
  p {
    margin-bottom: ${props => props.theme.spacing.md};
    transition: color 0.3s ease;
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
      transform: translateY(-2px);
    }
  }
  
  button {
    font-family: ${props => props.theme.fonts.main};
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }
  
  ul, ol {
    list-style-position: inside;
    margin-bottom: ${props => props.theme.spacing.md};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  section {
    padding: ${props => props.theme.spacing['3xl']} 0;
    transition: background-color 0.3s ease;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: ${props => props.theme.spacing['2xl']} 0;
    }
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.md};
  }
  
  .section-title {
    position: relative;
    display: inline-block;
    margin-bottom: ${props => props.theme.spacing['2xl']};
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: ${props => props.theme.colors.accent};
      transition: background-color 0.3s ease;
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
  
  /* Glass effect for cards and surfaces */
  .glass {
    background: ${props => props.theme.glassEffect.background};
    backdrop-filter: ${props => props.theme.glassEffect.backdropFilter};
    border: ${props => props.theme.glassEffect.border};
    border-radius: ${props => props.theme.borderRadius.md};
    box-shadow: ${props => props.theme.shadows.glass};
    transition: all 0.3s ease;
  }
  
  /* Page transitions */
  .page-transition-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .page-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  .page-transition-exit {
    opacity: 1;
    transform: translateY(0);
  }
  
  .page-transition-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  /* Reveal animations */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default GlobalStyles;
