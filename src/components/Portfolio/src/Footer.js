import styled from "styled-components";
import Phone from "./img/phone_white_24dp.svg";
import Mail from "./img/email_white_24dp.svg";

function Footer() {
  return (
    <Wrapper>
      <Text>Falk Kreimeier </Text>
      <Icons src={Phone} alt="phonenumer" />
      <Text>0152-05639742 </Text>

      <Icons src={Mail} alt="E-Mail Adresse" />
      <Text>info@lakritzel.net</Text>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  background: black;
  color: white;
  grid-area: footer;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  margin-top: 0.5rem;

  @media only screen and (max-width: 375px) {
    max-width: 375px;
  }
`;
const Text = styled.p`
  margin: 0;
  font-family: "Inter", sans-serif;

  @media only screen and (max-width: 375px) {
    font-size: 10px;
  }
`;
const Icons = styled.img`
  height: 1.2rem;
  padding-right: 0.5rem;
  padding-left: 2rem;
  @media only screen and (max-width: 375px) {
    height: 0.8rem;
  }
`;

export default Footer;
