import styled from "styled-components";

function FooterHome() {
  return (
    <Wrapper>
      <div>Footer</div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  grid-area: footer;
  justify-content: center;
  background-color: black;
  color: white;
`;

export default FooterHome;
