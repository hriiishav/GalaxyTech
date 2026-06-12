import {
  ContactSupplierButton,
  Logo,
  NavContainer,
  NavLink,
  NavLinks,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./styled";

function Navbar() {
  return (
    <NavContainer>
      <Logo to="/">GalaxyTech</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Our Products</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/videos">Videos</NavLink>
        <NavLink to="/photos">Photos</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </NavLinks>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search..." />
        <SearchButton>Search</SearchButton>
        <ContactSupplierButton to="/contact">
          Contact Supplier
        </ContactSupplierButton>
      </SearchContainer>
    </NavContainer>
  );
}

export default Navbar;
