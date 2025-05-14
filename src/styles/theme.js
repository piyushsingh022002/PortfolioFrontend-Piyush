// Theme configuration for the portfolio website
// Common theme values shared between light and dark themes
const commonTheme = {
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
    mono: "'Roboto Mono', monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

// Light theme (default) - Modern glassy UI with light blue and white
export const lightTheme = {
  ...commonTheme,
  colors: {
    primary: '#3B82F6', // Light blue
    secondary: '#1E40AF', // Darker blue
    accent: '#60A5FA', // Lighter blue accent
    background: '#FFFFFF', // White background
    cardBackground: 'rgba(255, 255, 255, 0.8)', // Glassy white
    surface: 'rgba(255, 255, 255, 0.7)', // Glassy surface
    text: '#1F2937', // Dark text
    textSecondary: '#4B5563', // Secondary text
    lightText: '#FFFFFF', // White text
    grey: '#9CA3AF', // Subtle grey
    border: 'rgba(209, 213, 219, 0.5)', // Light border
    success: '#10B981', // Green
    error: '#EF4444', // Red
    navBackground: 'rgba(255, 255, 255, 0.8)', // Glassy nav background
    shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
    glassShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12)',
    md: '0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.05)',
    lg: '0 10px 25px rgba(0,0,0,0.05), 0 5px 10px rgba(0,0,0,0.03)',
    xl: '0 20px 40px rgba(0,0,0,0.05)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
  },
  glassEffect: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
};

// Dark theme
export const darkTheme = {
  ...commonTheme,
  colors: {
    primary: '#60A5FA', // Light blue
    secondary: '#93C5FD', // Lighter blue
    accent: '#3B82F6', // Blue accent
    background: '#111827', // Dark background
    cardBackground: 'rgba(31, 41, 55, 0.7)', // Glassy dark
    surface: 'rgba(31, 41, 55, 0.6)', // Glassy surface
    text: '#F9FAFB', // Light text
    textSecondary: '#E5E7EB', // Secondary text
    lightText: '#FFFFFF', // White text
    grey: '#9CA3AF', // Subtle grey
    border: 'rgba(75, 85, 99, 0.5)', // Dark border
    success: '#10B981', // Green
    error: '#EF4444', // Red
    navBackground: 'rgba(17, 24, 39, 0.8)', // Glassy nav background
    shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
    glassShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.35)',
    md: '0 4px 6px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.25)',
    lg: '0 10px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.1)',
    xl: '0 20px 40px rgba(0,0,0,0.2)',
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
  },
  glassEffect: {
    background: 'rgba(31, 41, 55, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(75, 85, 99, 0.18)',
  },
};

// Default export for backward compatibility
export default lightTheme;
