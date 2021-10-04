import styled from 'styled-components'

function Facts() {
  return (
    <StyledFacts>
      <StyledHeadline>Facts:</StyledHeadline>
      <StyledOl>
        <StyledList1>40 Jahre jung</StyledList1>
        <StyledList1>1,93m klein</StyledList1>
        <StyledList1>Hoffnungsloser Optimist</StyledList1>
        <StyledList1>Philantrop</StyledList1>
        <StyledList1>
          Voll auf Spur, aber immer auch ein kleines bisschen daneben.
        </StyledList1>
        <br />
      </StyledOl>
      <StyledHeadline>Zitate:</StyledHeadline>
      <StyledOl>
        <StyledList1>"Isst du das noch?!"</StyledList1>
        <StyledList1>"Wer hat das Fettnäpfchen hier hingestellt?!"</StyledList1>
      </StyledOl>
    </StyledFacts>
  )
}

const StyledFacts = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: facts;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

const StyledHeadline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 10px;
  margin: 2px 0px 2px 0px;
  text-decoration: none;
  color: #58555a;
`

const StyledList1 = styled.li`
  text-align: left;
  padding-bottom: -5px;
  font-family: 'Inter', sans-serif;
`

const StyledOl = styled.ol`
  margin: 0;
`

export default Facts
