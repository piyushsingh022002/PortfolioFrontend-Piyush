import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaExclamationCircle } from 'react-icons/fa';
import Button from '../components/ui/Button';
import axios from 'axios';


const QuerySection = styled.section`
  padding: ${props => props.theme.spacing['3xl']} 0;
  background-color: ${props => props.theme.colors.background};
`;

const QueryContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const QueryTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const QueryDescription = styled.p`
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// const Query = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     designation: '',
//     email: '',
//     phone: '',
//     query: ''
//   });
  
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
  
//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }
    
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
//       newErrors.phone = 'Invalid phone number';
//     }
    
//     if (!formData.query.trim()) {
//       newErrors.query = 'Query is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user types
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: undefined
//       }));
//     }
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       // This is where you would normally make an API call with axios
//       // For now, we'll simulate a successful API call
//       await axios.post('http://localhost:5177/api/v1/QueryController', formData);
// console.log('Data successfully sent to backend!');

      
//       // Reset form
//       setFormData({
//         name: '',
//         designation: '',
//         email: '',
//         phone: '',
//         query: ''
//       });
      
//       setIsSubmitted(true);
      
//       // Hide success message after 5 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 3000);
      
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setErrors(prev => ({
//         ...prev,
//         form: 'There was an error submitting your query. Please try again.'
//       }));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  
//   return (
//     <QuerySection>
//       <QueryContainer>
//         <QueryTitle>Submit Your Query</QueryTitle>
//         <QueryDescription>
//           Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
//         </QueryDescription>
        
//         {isSubmitted && (
//           <SuccessMessage
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//           >
//             Your query has been submitted successfully! I'll get back to you soon.
//           </SuccessMessage>
//         )}
        
//         {errors.form && (
//           <ErrorMessage>{errors.form}</ErrorMessage>
//         )}
        
//         <form onSubmit={handleSubmit}>
//           <FormRow>
//             <FormGroup>
//               <Label htmlFor="name">Full Name *</Label>
//               <Input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 error={errors.name}
//                 placeholder="John Doe"
//               />
//               {errors.name && (
//                 <ErrorMessage>
//                   <FaExclamationCircle /> {errors.name}
//                 </ErrorMessage>
//               )}
//             </FormGroup>
            
//             <FormGroup>
//               <Label htmlFor="designation">Designation</Label>
//               <Input
//                 type="text"
//                 id="designation"
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
//                 placeholder="Software Engineer"
//               />
//             </FormGroup>
//           </FormRow>
          
//           <FormRow>
//             <FormGroup>
//               <Label htmlFor="email">Email Address *</Label>
//               <Input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 error={errors.email}
//                 placeholder="john@example.com"
//               />
//               {errors.email && (
//                 <ErrorMessage>
//                   <FaExclamationCircle /> {errors.email}
//                 </ErrorMessage>
//               )}
//             </FormGroup>
            
//             <FormGroup>
//               <Label htmlFor="phone">Phone Number *</Label>
//               <Input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 error={errors.phone}
//                 placeholder="+1 (123) 456-7890"
//               />
//               {errors.phone && (
//                 <ErrorMessage>
//                   <FaExclamationCircle /> {errors.phone}
//                 </ErrorMessage>
//               )}
//             </FormGroup>
//           </FormRow>
          
//           <FormGroup>
//             <Label htmlFor="query">Your Query *</Label>
//             <Textarea
//               id="query"
//               name="query"
//               value={formData.query}
//               onChange={handleChange}
//               error={errors.query}
//               placeholder="Please describe your query or project details..."
//             />
//             {errors.query && (
//               <ErrorMessage>
//                 <FaExclamationCircle /> {errors.query}
//               </ErrorMessage>
//             )}
//           </FormGroup>
          
//           <Button
//             type="submit"
//             variant="primary"
//             size="lg"
//             fullWidth
//             disabled={isSubmitting}
//             icon={<FaPaperPlane />}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit Query'}
//           </Button>
//         </form>
//       </QueryContainer>
//     </QuerySection>
//   );
// };

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    email: '',
    phone: '',
    query: ''
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
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.query.trim()) {
      newErrors.query = 'Query is required';
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace the URL with your deployed backend API
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/query`, formData);
      console.log('Query data successfully sent to backend!');

      // Reset form
      setFormData({
        name: '',
        designation: '',
        email: '',
        phone: '',
        query: ''
      });
      
      setIsSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({
        ...prev,
        form: 'There was an error submitting your query. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <QuerySection>
      <QueryContainer>
        <QueryTitle>Submit Your Query</QueryTitle>
        <QueryDescription>
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </QueryDescription>
        
        {isSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Your query has been submitted successfully! I'll get back to you soon.
          </SuccessMessage>
        )}
        
        {errors.form && (
          <ErrorMessage>{errors.form}</ErrorMessage>
        )}
        
        <form onSubmit={handleSubmit}>
          <FormRow>
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
              <Label htmlFor="designation">Designation</Label>
              <Input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Software Engineer"
              />
            </FormGroup>
          </FormRow>
          
          <FormRow>
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
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="+1 (123) 456-7890"
              />
              {errors.phone && (
                <ErrorMessage>
                  <FaExclamationCircle /> {errors.phone}
                </ErrorMessage>
              )}
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label htmlFor="query">Your Query *</Label>
            <Textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              error={errors.query}
              placeholder="Please describe your query or project details..."
            />
            {errors.query && (
              <ErrorMessage>
                <FaExclamationCircle /> {errors.query}
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
            {isSubmitting ? 'Submitting...' : 'Submit Query'}
          </Button>
        </form>
      </QueryContainer>
    </QuerySection>
  );
};


export default Query;
