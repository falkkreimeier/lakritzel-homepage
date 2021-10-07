import styled from "styled-components";
import Githubimg from "./img/github.svg.png";

function Github() {
  return (
    <Wrapper href="https://github.com/falkkreimeier">
      <ImageContainer id="github">
        <Img src={Githubimg} alt="Mein github Profil" />
      </ImageContainer>
    </Wrapper>
  );
}

export const Img = styled.img`
  position: sticky;
  height: 4rem;
`;

const Wrapper = styled.a`
  grid-area: github;
`;

const ImageContainer = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  min-width: var(--main-width);
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`;
export default Github;
