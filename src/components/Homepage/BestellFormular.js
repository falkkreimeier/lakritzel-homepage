import styled from "styled-components";
import { Headline } from "../Portfolio/src/Profile";

function BestellFormular() {
  return (
    <Wrapper>
      <Headline>Yeah</Headline>
      <Form>
        <InputContainer>
          <Nachnahme
            type="text"
            placeholder="Nachname"
            name="name"
            maxlength="20"
          />
        </InputContainer>
        <InputContainer>
          <Vorname
            type="text"
            placeholder="Vorname"
            name="nachname"
            maxlength="20"
          />
        </InputContainer>
        <InputContainer>
          <Straße
            maxlength="20"
            type="text"
            placeholder="Straße"
            name="straße"
          />
        </InputContainer>
        <InputContainer>
          <Postleitzahl
            maxlength="20"
            type="text"
            placeholder="Postleitzahl"
            name="postleitzahl"
          />
        </InputContainer>
        <InputContainer>
          <Stadt maxlength="20" type="text" placeholder="Stadt" name="stadt" />
        </InputContainer>
        <InputContainer>
          <Mail
            maxlength="20"
            type="text"
            placeholder="E-Mail Adresse"
            name="email"
          />
        </InputContainer>
        <InputContainer>
          <Amount maxlength="20" type="number" placeholder="0" name="menge" />
        </InputContainer>
        <MessageContainer>
          <Message
            type="text"
            cols="10"
            rows="8"
            placeholder="Nachricht"
            name="nachricht"
          />
        </MessageContainer>
        <ButtonContainer>
          <Button type="submit" value="Bestellen" />
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100% auto;
  width: 500px;
  border: 1px solid white;
  border-radius: 15px;
  padding: 0px;
  grid-area: order;
  background-color: white;
  @media only screen and (max-width: 800px) {
    margin: 0 auto;
    width: 24rem;
  }
`;

const Form = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-areas:
    "vorname name"
    "straße postleitzahl"
    "stadt email"
    "message message"
    "menge bestellen"
    "button button";
  @media only screen and (max-width: 800px) {
    grid-template-areas:
      "vorname"
      "name"
      "straße"
      "postleitzahl"
      "stadt"
      "email"
      "menge"
      "message";
    grid-gap: 0.5rem;
  }
`;

const InputContainer = styled.div`
  margin: 10px;
  width: 170px;
  border: 2px solid black;
  border-radius: 19px;
  text-align: center;
`;

const Input = styled.input`
  grid-area: name;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const Nachnahme = styled.input`
  grid-area: name;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const Vorname = styled.input`
  grid-area: vorname;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const Straße = styled.input`
  grid-area: straße;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const Postleitzahl = styled.input`
  grid-area: postleitzahl;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const Stadt = styled.input`
  grid-area: stadt;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const Mail = styled.input`
  grid-area: mail;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const Amount = styled.input`
  grid-area: menge;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const MessageContainer = styled.div`
  margin: 10px;
  width: 170px;
  border: 2px solid black;
  border-radius: 19px;
  text-align: center;
`;

const Message = styled.input`
  grid-area: message;
  border: none;
  text-align: center;
  border-radius: 19px;
  width: 160px;
`;

const ButtonContainer = styled.div``;

const Button = styled.input`
  position: relative;
  top: 50px;
  left: 115px;
  grid-area: button;
  margin: 0 auto;
  border: none;
  background-color: black;
  color: white;
  width: 12rem;
  height: 12rem;
  font-size: 2rem;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 5px grey;

  @media only screen and (max-width: 800px) {
    width: 8rem;
    height: 8rem;
    top: 0px;
    left: 35px;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  grid-gap: 0.5rem;

  &:hover {
    border: 2px solid white;
    box-shadow: 0px 20px 20px 10px black;
    @media only screen and (max-width: 800px) {
      box-shadow: 0px 10px 10px 5px black;
    }
  }
`;

export default BestellFormular;
