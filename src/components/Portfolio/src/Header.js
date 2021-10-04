import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <StyledHeadline>Falk Kreimeier</StyledHeadline>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  grid-area: head;
  background: black;
  color: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`;

const StyledHeadline = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: 600;
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 10px;
  margin: 0px 0px 2px 0px;
  text-decoration: none;
  color: white;
`;

export default Header;
