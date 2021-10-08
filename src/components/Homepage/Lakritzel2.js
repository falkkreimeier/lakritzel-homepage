import styled from "styled-components";
import BottleImg from "../Homepage/img/painted-bottle.jpg";

function Lakritzel2() {
  return (
    <Wrapper>
      <Image src={BottleImg} alt="Picture of a painted Lakritzel bottle" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: lakritzel2;
`;

const Image = styled.img`
  height: 20rem;
  border-radius: 15px;
  margin: 0;
  @media only screen and (max-width: 800px) {
    height: 21rem;
  }
`;

export default Lakritzel2;
