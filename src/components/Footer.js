import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div>Footer</div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  grid-area: footer;
  border: 1px solid white;
  border-radius: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid white;
  background-color: black;
  color: white;
  margin: 0 auto;
`;

export default Footer;
