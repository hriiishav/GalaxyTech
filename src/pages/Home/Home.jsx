import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  FeaturesSection,
  FeatureCard,
  FeatureTitle,
} from "./styled";

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>Welcome to GalaxyTech</HeroTitle>
        <HeroSubtitle>Your trusted partner for quality products and services</HeroSubtitle>
        <CTAButton>Explore Our Products</CTAButton>
      </HeroSection>
      <FeaturesSection>
        <FeatureCard>
          <FeatureTitle>Quality Products</FeatureTitle>
          <p>We offer the best quality products in the market</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Fast Delivery</FeatureTitle>
          <p>Quick and reliable delivery to your doorstep</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>24/7 Support</FeatureTitle>
          <p>Round the clock customer support</p>
        </FeatureCard>
      </FeaturesSection>
    </HomeContainer>
  );
}

export default Home;
