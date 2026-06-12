import { FooterContainer, FooterLink, FooterLinks, Copyright } from "./styled";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/products">Our Products</FooterLink>
        <FooterLink to="/about">About Us</FooterLink>
        <FooterLink to="/videos">Videos</FooterLink>
        <FooterLink to="/photos">Photos</FooterLink>
        <FooterLink to="/contact">Contact Us</FooterLink>
      </FooterLinks>
      <Copyright>© 2024 GalaxyTech. All rights reserved.</Copyright>
    </FooterContainer>
  );
}

export default Footer;
