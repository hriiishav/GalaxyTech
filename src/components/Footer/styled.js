import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #004499;
  color: white;
  padding: 2rem;
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;
