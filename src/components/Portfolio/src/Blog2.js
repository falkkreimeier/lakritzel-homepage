import styled from "styled-components";
import { Headline } from "./Profile";
import { Text } from "./Welcome";
import { Button } from "./Portfolio";

function Blog2() {
  return (
    <Wrapper>
      <Headline>
        Das einzige Steak, das man sich beim Essen versauen kann.
      </Headline>
      <Text>
        Es gibt Hüftsteak, Filetsteak, Rumpsteak, T-Bone Steak, Rib-Eye Steak,
        Tomahawk Steak...
      </Text>
      <div>
        <Button>weiterlesen</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: blog2;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media only screen and (max-width: 375px) {
    max-width: 375px;
    margin: 0;
  }
`;
export default Blog2;
