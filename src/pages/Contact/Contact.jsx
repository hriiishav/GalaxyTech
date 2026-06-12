import {
  ContactContainer,
  PageTitle,
  ContactGrid,
  ContactCard,
  CardTitle,
  Form,
  Input,
  TextArea,
  SubmitButton,
  InfoItem,
  InfoLabel,
  InfoText,
} from "./styled";

function Contact() {
  return (
    <ContactContainer>
      <PageTitle>Contact Us</PageTitle>
      <ContactGrid>
        <ContactCard>
          <CardTitle>Send us a message</CardTitle>
          <Form>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <TextArea placeholder="Your Message" />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </ContactCard>
        <ContactCard>
          <CardTitle>Contact Information</CardTitle>
          <InfoItem>
            <InfoLabel>Email</InfoLabel>
            <InfoText>info@galaxytech.com</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Phone</InfoLabel>
            <InfoText>+1 (555) 123-4567</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Address</InfoLabel>
            <InfoText>123 Tech Street, Silicon Valley, CA 94000</InfoText>
          </InfoItem>
        </ContactCard>
      </ContactGrid>
    </ContactContainer>
  );
}

export default Contact;
