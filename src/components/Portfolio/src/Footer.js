import styled from "styled-components";
import Phone from "./img/phone_white_24dp.svg";
import Mail from "./img/email_white_24dp.svg";

function Footer() {
  return (
    <StyledFotter>
      <StyledText>Falk Kreimeier </StyledText>
      <StyledIcons src={Phone} alt="phonenumer" />
      <StyledText>0152-05639742 </StyledText>

      <StyledIcons src={Mail} alt="E-Mail Adresse" />
      <StyledText>f.kreimeier@gmx.net</StyledText>
    </StyledFotter>
  );
}

const StyledFotter = styled.footer`
  display: flex;
  justify-content: center;
  background: black;
  color: white;
  grid-area: footerpf;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  margin-top: 0.5rem;

  @media only screen and (max-width: 1000px) {
    max-width: 375px;
    margin: 0;
  }
`;
const StyledText = styled.p`
  margin: 0;
  font-family: "Inter", sans-serif;

  @media only screen and (max-width: 375px) {
    font-size: 10px;
    margin: 0;
  }
`;
const StyledIcons = styled.img`
  height: 1.2rem;
  padding-right: 0.5rem;
  padding-left: 2rem;
  @media only screen and (max-width: 375px) {
    height: 0.8rem;
  }
`;

export default Footer;
