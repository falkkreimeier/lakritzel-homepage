import styled from 'styled-components'
import Xingimg from './img/xing.svg'

function Xing() {
  return (
    <StyleA href="https://www.xing.com/profile/falk_kreimeier">
      <StyledXing>
        <StyledImg src={Xingimg} alt="Mein Xing Profil" />
      </StyledXing>
    </StyleA>
  )
}

export const StyledImg = styled.img`
  position: sticky;
  height: 3rem;
`

const StyleA = styled.a`
  grid-area: xing;
`

const StyledXing = styled.div`
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
`
export default Xing
