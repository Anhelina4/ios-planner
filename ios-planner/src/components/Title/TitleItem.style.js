import styled, {css} from "styled-components"

const TitleItem = styled.h2`
  color: ${props => props.color || "var(--color-blue)"};
  font-size: var(--title-md);
  font-family:  "San Francisco";
  ${props=>props.size === "sm" && css`
    font-size: var(--title-sm);
  `}
  ${props=>props.size === "md" && css`
    font-size: var(--title-md);
  `}
`

export default TitleItem
