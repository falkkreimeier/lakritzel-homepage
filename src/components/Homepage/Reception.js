import styled from "styled-components";

function Reception() {
  return (
    <Wrapper>
      <Headline>HIIILFE!</Headline>
      <Text>
        Ich bin Lakritzel und dieser durchgeknallte Kritzelkopf hat mich über
        Nacht einfach abgefüllt, in diese Flasche gestopft und dann behauptet
        ich sei total übergeschnapst. LÄCHERLICH! Ich meine, sehe ich aus wie
        eine Dschinni, der Wünsche erfüllt?
        <br /> <br />
        Ich bin total süß und vertrage mich auch mit den anderen Likören in
        deinem Schrank – ehrlich. Kaffelikör, Schokolikör, Fruchtlikör
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 20rem;
  border: 1px solid white;
  border-radius: 15px;
  padding: 15px;
  grid-area: reception;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    margin: 0 auto;
    width: 24rem;
  }
`;

const Headline = styled.h1`
  text-align: center;
  height: 2rem;
`;

const Text = styled.p``;

export default Reception;
