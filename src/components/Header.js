import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <div>Header</div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  grid-area: header;
  border: 1px solid white;
  background-color: white;
  display: flex;
  margin: 0 auto;
`;

export default Header;
