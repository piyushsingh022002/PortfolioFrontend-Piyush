import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaExclamationCircle, FaStar } from 'react-icons/fa';
import Button from '../components/ui/Button';
import axios from "axios";

const FeedbackSection = styled.section`
  padding: ${props => props.theme.spacing['3xl']} 0;
  background-color: ${props => props.theme.colors.background};
`;

const FeedbackContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const FeedbackTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const FeedbackDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.error ? props.theme.colors.error : '#e1e1e1'};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.md};
  transition: border-color ${props => props.theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? props.theme.colors.error : props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.error 
      ? `${props.theme.colors.error}33` 
      : `${props.theme.colors.primary}33`};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.error ? props.theme.colors.error : '#e1e1e1'};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.md};
  min-height: 150px;
  resize: vertical;
  font-family: ${props => props.theme.fonts.main};
  transition: border-color ${props => props.theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? props.theme.colors.error : props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.error 
      ? `${props.theme.colors.error}33` 
      : `${props.theme.colors.primary}33`};
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacing.xs};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 5px;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: ${props => props.theme.colors.success};
  color: white;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 1.75rem;
  color: ${props => props.active ? props.theme.colors.accent : '#e1e1e1'};
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: scale(1.1);
  }
`;

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 0
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    }
    
    if (formData.rating === 0) {
      newErrors.rating = 'Please provide a rating';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
    
    if (errors.rating) {
      setErrors(prev => ({
        ...prev,
        rating: undefined
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This is where you would normally make an API call with axios
      // For now, we'll simulate a successful API call
      await axios.post(
        "http://localhost:5177/api/v1/feedback",
        formData
      );
      console.log("Feedback Data successfully sent to backend!");
      
      console.log('Feedback submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: 0
      });
      
      setIsSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setErrors(prev => ({
        ...prev,
        form: 'There was an error submitting your feedback. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <FeedbackSection>
      <FeedbackContainer>
        <FeedbackTitle>Leave Your Feedback</FeedbackTitle>
        <FeedbackDescription>
          Your feedback is valuable to me! Please share your thoughts on my portfolio or your experience working with me.
        </FeedbackDescription>
        
        {isSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Thank you for your feedback! I appreciate your time and insights.
          </SuccessMessage>
        )}
        
        {errors.form && (
          <ErrorMessage>{errors.form}</ErrorMessage>
        )}
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="John Doe"
            />
            {errors.name && (
              <ErrorMessage>
                <FaExclamationCircle /> {errors.name}
              </ErrorMessage>
            )}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="john@example.com"
            />
            {errors.email && (
              <ErrorMessage>
                <FaExclamationCircle /> {errors.email}
              </ErrorMessage>
            )}
          </FormGroup>
          
          <FormGroup>
            <Label>Your Rating *</Label>
            <RatingContainer>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarButton
                  key={star}
                  type="button"
                  active={formData.rating >= star}
                  onClick={() => handleRatingChange(star)}
                >
                  <FaStar />
                </StarButton>
              ))}
            </RatingContainer>
            {errors.rating && (
              <ErrorMessage>
                <FaExclamationCircle /> {errors.rating}
              </ErrorMessage>
            )}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="feedback">Your Feedback *</Label>
            <Textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              error={errors.feedback}
              placeholder="Please share your thoughts, suggestions, or experiences..."
            />
            {errors.feedback && (
              <ErrorMessage>
                <FaExclamationCircle /> {errors.feedback}
              </ErrorMessage>
            )}
          </FormGroup>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            icon={<FaPaperPlane />}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Button>
        </form>
      </FeedbackContainer>
    </FeedbackSection>
  );
};

export default Feedback;
