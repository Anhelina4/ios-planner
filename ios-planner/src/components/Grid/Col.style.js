import styled, { css } from "styled-components"

const ColWrapper = styled.div`
  flex: 1 0 0%;
  flex-shrink: 0;
  max-width: 100%;
  box-sizing: border-box;
  ${props =>
    props.cw === "auto" &&
    css`
      flex: 0 0 auto;
      width: auto;
    `}

  ${props =>
    props.cw >= 1 &&
    props.cw <= 12 &&
    css`
      flex: 0 0 auto;
      width: ${props => (props.cw / 12) * 100}%;
    `}
`

export default ColWrapper
