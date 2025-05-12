import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaExclamationCircle,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import axios from "axios";

const ContactSection = styled.section`
  padding: ${(props) => props.theme.spacing["3xl"]} 0;
  background-color: ${(props) => props.theme.colors.background};
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  position: relative;
  display: inline-block;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.secondary};

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const ContactDescription = styled.p`
  max-width: 800px;
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 2.5rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  height: fit-content;
`;

const ContactInfoTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: white;
`;

const ContactInfoDescription = styled.p`
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactInfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ContactInfoContent = styled.div`
  h4 {
    margin-bottom: 0.25rem;
    color: white;
  }

  p {
    opacity: 0.9;
    margin-bottom: 0;
  }
`;

const ContactForm = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: ${(props) => props.theme.shadows.md};
`;

const FormTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${(props) => (props.error ? props.theme.colors.error : "#e1e1e1")};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.fontSizes.md};
  transition: border-color ${(props) => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.error
          ? `${props.theme.colors.error}33`
          : `${props.theme.colors.primary}33`};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${(props) => (props.error ? props.theme.colors.error : "#e1e1e1")};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.fontSizes.md};
  min-height: 150px;
  resize: vertical;
  font-family: ${(props) => props.theme.fonts.main};
  transition: border-color ${(props) => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.error
          ? `${props.theme.colors.error}33`
          : `${props.theme.colors.primary}33`};
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.error};
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-top: 0.25rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.success};
  color: white;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  text-align: center;
`;

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user types
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: undefined,
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
//       await axios.post(
//         "http://localhost:5177/api/v1/ContactController",
//         formData
//       );
//       console.log("Contact Data successfully sent to backend!");

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });

//       setIsSubmitted(true);

//       // Hide success message after 5 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setErrors((prev) => ({
//         ...prev,
//         form: "There was an error sending your message. Please try again.",
//       }));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <ContactSection>
//       <ContactContainer>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <SectionTitle>Get In Touch</SectionTitle>
//           <ContactDescription>
//             Have a question or want to work together? Feel free to contact me
//             using the form below or through the provided contact information.
//           </ContactDescription>
//         </motion.div>

//         <ContactGrid>
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <ContactInfo>
//               <ContactInfoTitle>Contact Information</ContactInfoTitle>
//               <ContactInfoDescription>
//                 Feel free to reach out to me anytime. I'm available for
//                 freelance work, full-time positions, or just to chat about
//                 potential collaborations.
//               </ContactInfoDescription>

//               <ContactInfoItem>
//                 <ContactInfoIcon>
//                   <FaMapMarkerAlt />
//                 </ContactInfoIcon>
//                 <ContactInfoContent>
//                   <h4>Location</h4>
//                   <p>San Francisco, CA, United States</p>
//                 </ContactInfoContent>
//               </ContactInfoItem>

//               <ContactInfoItem>
//                 <ContactInfoIcon>
//                   <FaEnvelope />
//                 </ContactInfoIcon>
//                 <ContactInfoContent>
//                   <h4>Email</h4>
//                   <p>contact@example.com</p>
//                 </ContactInfoContent>
//               </ContactInfoItem>

//               <ContactInfoItem>
//                 <ContactInfoIcon>
//                   <FaPhone />
//                 </ContactInfoIcon>
//                 <ContactInfoContent>
//                   <h4>Phone</h4>
//                   <p>+1 (123) 456-7890</p>
//                 </ContactInfoContent>
//               </ContactInfoItem>
//             </ContactInfo>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <ContactForm>
//               <FormTitle>Send Me a Message</FormTitle>

//               {isSubmitted && (
//                 <SuccessMessage
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                 >
//                   Your message has been sent successfully! I'll get back to you
//                   soon.
//                 </SuccessMessage>
//               )}

//               {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}

//               <form onSubmit={handleSubmit}>
//                 <FormRow>
//                   <FormGroup>
//                     <Label htmlFor="name">Your Name</Label>
//                     <Input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       error={errors.name}
//                       placeholder="John Doe"
//                     />
//                     {errors.name && (
//                       <ErrorMessage>
//                         <FaExclamationCircle /> {errors.name}
//                       </ErrorMessage>
//                     )}
//                   </FormGroup>

//                   <FormGroup>
//                     <Label htmlFor="email">Your Email</Label>
//                     <Input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       error={errors.email}
//                       placeholder="john@example.com"
//                     />
//                     {errors.email && (
//                       <ErrorMessage>
//                         <FaExclamationCircle /> {errors.email}
//                       </ErrorMessage>
//                     )}
//                   </FormGroup>
//                 </FormRow>

//                 <FormGroup>
//                   <Label htmlFor="subject">Subject</Label>
//                   <Input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     error={errors.subject}
//                     placeholder="Project Inquiry"
//                   />
//                   {errors.subject && (
//                     <ErrorMessage>
//                       <FaExclamationCircle /> {errors.subject}
//                     </ErrorMessage>
//                   )}
//                 </FormGroup>

//                 <FormGroup>
//                   <Label htmlFor="message">Your Message</Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     error={errors.message}
//                     placeholder="Hello, I'm interested in working with you on a project..."
//                   />
//                   {errors.message && (
//                     <ErrorMessage>
//                       <FaExclamationCircle /> {errors.message}
//                     </ErrorMessage>
//                   )}
//                 </FormGroup>

//                 <Button
//                   type="submit"
//                   variant="primary"
//                   size="lg"
//                   fullWidth
//                   disabled={isSubmitting}
//                   icon={<FaPaperPlane />}
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//             </ContactForm>
//           </motion.div>
//         </ContactGrid>
//       </ContactContainer>
//     </ContactSection>
//   );
// };

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
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
      // Update the URL to the deployed backend
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/contact`,
        formData
      );
      console.log("Contact Data successfully sent to backend!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors((prev) => ({
        ...prev,
        form: "There was an error sending your message. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection>
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactDescription>
            Have a question or want to work together? Feel free to contact me
            using the form below or through the provided contact information.
          </ContactDescription>
        </motion.div>

        <ContactGrid>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfo>
              <ContactInfoTitle>Contact Information</ContactInfoTitle>
              <ContactInfoDescription>
                Feel free to reach out to me anytime. I'm available for
                freelance work, full-time positions, or just to chat about
                potential collaborations.
              </ContactInfoDescription>

              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaMapMarkerAlt />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <h4>Location</h4>
                  <p>San Francisco, CA, United States</p>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaEnvelope />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <h4>Email</h4>
                  <p>contact@example.com</p>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaPhone />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm>
              <FormTitle>Send Me a Message</FormTitle>

              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </SuccessMessage>
              )}

              {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}

              <form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">Your Name</Label>
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
                    <Label htmlFor="email">Your Email</Label>
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
                </FormRow>

                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <ErrorMessage>
                      <FaExclamationCircle /> {errors.subject}
                    </ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Hello, I'm interested in working with you on a project..."
                  />
                  {errors.message && (
                    <ErrorMessage>
                      <FaExclamationCircle /> {errors.message}
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
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </ContactForm>
          </motion.div>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};


export default Contact;
