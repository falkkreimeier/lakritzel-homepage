import styled from "styled-components";
import { Headline } from "./Profile";

function Interests() {
  return (
    <Wrapper>
      <Headline>Interessen</Headline>
      <Ol>
        <List>Programmieren</List>
        <List>Bücher (Fantasy)</List>
        <List>Gaming</List>
        <List>Neue Dinge erfinden, z.B. Lakritzel</List>
        <List>Hanteln schubsen</List>
        <List>Schreiben/Texten</List>
      </Ol>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: interests;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`;

export const List = styled.li`
  text-align: left;
  padding-bottom: -5px;
  font-family: "Inter", sans-serif;
`;

export const Ol = styled.ol`
  margin: 0;
`;

export default Interests;
