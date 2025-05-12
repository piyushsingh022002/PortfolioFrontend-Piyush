import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { jwtDecode } from 'jwt-decode'; // Named import
 

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #e0c3fc, #8ec5fc);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 90%;
  max-width: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FeedbackList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeedbackItem = styled.li`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.span`
  font-size: 1rem;
  color: ${(props) => (props.done ? "#999" : "#333")};
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  background: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #c0392b;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

const Dashboard = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if no token exists
      navigate('/login');
    } else {
      try {
        const decodedToken = jwtDecode(token); // Use jwtDecode instead of jwt_decode
        const currentTime = Date.now() / 1000; // Current time in seconds

        if (decodedToken.exp < currentTime) {
          // Token is expired
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          fetchFeedback(token); // Fetch feedback if token is valid
        }
      } catch (error) {
        console.error('Token decoding error:', error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, [navigate]);

  const fetchFeedback = async (token) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/feedback`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFeedbackList(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      if (error.response?.status === 401) {
        // Token is invalid or expired
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        setError('Failed to load feedback. Please try again later.');
      }
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(
        `https://portfoliobackend-piyush.onrender.com/api/v1/feedback/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFeedbackList(feedbackList.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Delete failed:', error);
      setError('Failed to delete feedback. Please try again later.');
    }
  };

  const handleToggleDone = (id) => {
    setFeedbackList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <Container>
      <Card>
        <Heading>Dashboard</Heading>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        {feedbackList.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#555' }}>
            No feedback available.
          </p>
        ) : (
          <FeedbackList>
            {feedbackList.map((item) => (
              <FeedbackItem key={item.id}>
                <Info>
                  <Checkbox
                    type="checkbox"
                    checked={item.done || false}
                    onChange={() => handleToggleDone(item.id)}
                  />
                  <Text done={item.done}>Name: {item.name}</Text>
                  <Text done={item.done}>Email: {item.email}</Text>
                  <Text done={item.done}>Rating: {item.rating}</Text>
                  <Text done={item.done}>Feedback: {item.feedback}</Text>
                </Info>
                <DeleteButton onClick={() => handleDelete(item.id)}>
                  Delete
                </DeleteButton>
              </FeedbackItem>
            ))}
          </FeedbackList>
        )}
      </Card>
    </Container>
  );
};

export default Dashboard;