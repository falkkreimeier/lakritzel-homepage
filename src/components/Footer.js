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
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  margin: 0 auto;
`;

export default Footer;
