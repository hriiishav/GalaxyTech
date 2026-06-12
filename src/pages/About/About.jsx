import {
  AboutContainer,
  PageTitle,
  ContentSection,
  SectionTitle,
  Text,
} from "./styled";

function About() {
  return (
    <AboutContainer>
      <PageTitle>About Us</PageTitle>
      <ContentSection>
        <SectionTitle>Who We Are</SectionTitle>
        <Text>
          GalaxyTech is a leading provider of quality products and services. We are committed to 
          delivering excellence in everything we do, from our products to our customer service.
        </Text>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Our Mission</SectionTitle>
        <Text>
          Our mission is to provide innovative solutions that meet the needs of our customers 
          while maintaining the highest standards of quality and integrity.
        </Text>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Our Values</SectionTitle>
        <Text>
          We believe in quality, innovation, customer satisfaction, and building long-term 
          relationships with our clients.
        </Text>
      </ContentSection>
    </AboutContainer>
  );
}

export default About;
