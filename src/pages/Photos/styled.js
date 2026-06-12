import styled from "styled-components";

export const PhotosContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  color: #0066cc;
  text-align: center;
  margin-bottom: 2rem;
`;

export const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const PhotoCard = styled.div`
  background-color: white;
  border: 2px solid #0066cc;
  border-radius: 8px;
  overflow: hidden;
`;

export const PhotoImage = styled.div`
  background-color: #e6f0ff;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0066cc;
  font-weight: bold;
`;

export const PhotoCaption = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const PhotoTitle = styled.h3`
  color: #0066cc;
  margin: 0 0 0.5rem 0;
`;
