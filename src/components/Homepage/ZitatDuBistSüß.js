import styled from "styled-components";
import QuoteImg from "../Homepage/img/Süß.jpg";

function ZitatDuBistSüß() {
  return (
    <Wrapper>
      <Image src={QuoteImg} alt="Picture of a looney Lakritzel-Quote"></Image>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: quote;
`;

const Image = styled.img`
  height: 20rem;
  border-radius: 15px;
  @media only screen and (max-width: 800px) {
    height: 24rem;
  }
`;

export default ZitatDuBistSüß;
