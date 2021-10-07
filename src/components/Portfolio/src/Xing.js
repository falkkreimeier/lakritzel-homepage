import styled from "styled-components";
import Xingimg from "./img/xing.svg";

function Xing() {
  return (
    <Wrapper href="https://www.xing.com/profile/falk_kreimeier">
      <ImageContainer>
        <Img src={Xingimg} alt="Mein Xing Profil" />
      </ImageContainer>
    </Wrapper>
  );
}

export const Img = styled.img`
  position: sticky;
  height: 3rem;
`;

const Wrapper = styled.a`
  grid-area: xing;
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
export default Xing;
