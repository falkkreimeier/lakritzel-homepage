import styled from "styled-components";
import BottleImg from "../Homepage/img/painted-bottle.jpg";

function MotivLakritzelFlasche() {
  return (
    <Wrapper>
      <Image src={BottleImg} alt="Picture of a painted Lakritzel bottle" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-radius: 19px;
  width: 23rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: lakritzel2;
  margin: 0 auto;
  @media only screen and (max-width: 800px) {
    width: 24rem;
  }
`;

const Image = styled.img`
  height: 20rem;
  border-radius: 15px;
  margin: 0;
`;

export default MotivLakritzelFlasche;
