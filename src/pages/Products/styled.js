import styled from "styled-components";

export const ProductsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  color: #0066cc;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const ProductCard = styled.div`
  background-color: white;
  border: 2px solid #0066cc;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

export const ProductImage = styled.div`
  background-color: #e6f0ff;
  height: 200px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #0066cc;
`;

export const ProductName = styled.h3`
  color: #0066cc;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #004499;
  margin-bottom: 1rem;
`;

export const BuyButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #004499;
  }
`;
