import styled from "styled-components";

export const VideosContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  color: #0066cc;
  text-align: center;
  margin-bottom: 2rem;
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const VideoCard = styled.div`
  background-color: white;
  border: 2px solid #0066cc;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const VideoThumbnail = styled.div`
  background-color: #e6f0ff;
  height: 180px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #0066cc;
  font-weight: bold;
`;

export const VideoTitle = styled.h3`
  color: #0066cc;
  margin-bottom: 0.5rem;
`;

export const VideoDescription = styled.p`
  color: #333;
  font-size: 0.9rem;
`;
