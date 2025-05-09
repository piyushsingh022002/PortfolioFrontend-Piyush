import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6a82fb, #fc5c7d); /* Gradient background */
  color: ${props => props.theme?.colors?.lightText || '#ffffff'};
  padding: ${props => props.theme?.spacing?.['2xl'] || '40px'};
`;

const LoginBox = styled.div`
  background-color: ${props => props.theme?.colors?.cardBackground || '#ffffff'};
  padding: ${props => props.theme?.spacing?.['2xl'] || '40px'};
  border-radius: ${props => props.theme?.radii?.lg || '12px'};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); /* Softer shadow for a more polished look */
  width: 100%;
  max-width: 400px;
`;

const Heading = styled.h2`
  font-size: ${props => props.theme?.fontSizes?.['2xl'] || '24px'};
  margin-bottom: ${props => props.theme?.spacing?.lg || '16px'};
  text-align: center;
  color: ${props => props.theme?.colors?.headingColor || '#333333'}; /* Softer heading color */
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme?.spacing?.sm || '12px'};
  margin-bottom: ${props => props.theme?.spacing?.md || '16px'};
  border: 2px solid ${props => props.theme?.colors?.inputBorder || '#dcdcdc'}; /* Light border */
  border-radius: ${props => props.theme?.radii?.sm || '6px'};
  background-color: ${props => props.theme?.colors?.inputBackground || '#f7f7f7'};
  color: ${props => props.theme?.colors?.inputText || '#333333'};
  font-size: ${props => props.theme?.fontSizes?.md || '14px'};

  &:focus {
    outline: none;
    border-color: ${props => props.theme?.colors?.accent || '#fc5c7d'}; /* Accent color on focus */
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${props => props.theme?.spacing?.sm || '12px'};
  background-color: ${props => props.theme?.colors?.accent || '#fc5c7d'};
  color: white;
  border: none;
  border-radius: ${props => props.theme?.radii?.sm || '6px'};
  font-size: ${props => props.theme?.fontSizes?.md || '14px'};
  cursor: pointer;
  transition: background-color ${props => props.theme?.transitions?.fast || '0.2s'};

  &:hover {
    background-color: ${props => props.theme?.colors?.accentHover || '#6a82fb'}; /* Hover effect */
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/login`,
        formData
      );
  
      // Assuming your backend returns { token: '...' }
      const token = response.data.token;
  
      if (token) {
        // Store token securely (localStorage or cookie)
        localStorage.setItem('token', token);
  
        // Navigate to protected route
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };
  
  

  return (
    <LoginWrapper>
      <LoginBox>
        <Heading>Login</Heading>
        <form onSubmit={handleLogin}>
          <Input 
            type="text" 
            name="username"
            placeholder="Username" 
            value={formData.username}
            onChange={handleChange}
            required 
          />
          <Input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
