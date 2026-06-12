import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  background-color: #0066cc;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  width: 200px;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: #0066cc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ContactSupplierButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: white;
  color: #0066cc;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background-color: #f0f0f0;
  }
`;
