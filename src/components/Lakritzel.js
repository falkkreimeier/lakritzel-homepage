import styled from "styled-components";
import LakritzelImg from "../img/Übergeschnapst.jpg";

function Lakritzel() {
  return (
    <Wrapper>
      <Image src={LakritzelImg} alt="Picture of a looney Lakritzel"></Image>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: lakritzel1;
`;

const Image = styled.img`
  height: 20rem;
  border-radius: 15px;
`;

export default Lakritzel;
