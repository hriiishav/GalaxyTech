import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  color: #0066cc;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ContactCard = styled.div`
  background-color: white;
  border: 2px solid #0066cc;
  border-radius: 8px;
  padding: 2rem;
`;

export const CardTitle = styled.h2`
  color: #0066cc;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #0066cc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid #0066cc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #004499;
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 1rem;
`;

export const InfoLabel = styled.h3`
  color: #0066cc;
  margin-bottom: 0.5rem;
`;

export const InfoText = styled.p`
  margin: 0;
`;
