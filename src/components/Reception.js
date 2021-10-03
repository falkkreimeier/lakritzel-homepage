import styled from "styled-components";

function Reception() {
  return (
    <Wrapper>
      <Headline>LOREM IPSUM</Headline>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 20rem;
  /* width: 4rem; */
  border: 1px solid white;
  border-radius: 15px;
  padding: 15px;
  grid-area: reception;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Headline = styled.h1`
  text-align: center;
  height: 2rem;
`;

const Text = styled.p``;

export default Reception;
