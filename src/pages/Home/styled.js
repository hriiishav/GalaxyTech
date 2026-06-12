import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroSection = styled.div`
  background-color: #0066cc;
  color: white;
  padding: 3rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const CTAButton = styled.button`
  padding: 1rem 2rem;
  background-color: white;
  color: #0066cc;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const FeatureCard = styled.div`
  background-color: white;
  border: 2px solid #0066cc;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
`;

export const FeatureTitle = styled.h3`
  color: #0066cc;
  margin-bottom: 1rem;
`;
