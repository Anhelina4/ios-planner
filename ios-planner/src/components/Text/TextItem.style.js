import styled from "styled-components"

const TextItem = styled.div`
  color: ${props => props.color || "var(--color-dark)"};
  font-size: ${props => props.fontSize || "var(--text-md)"};
  font-weight: ${props => props.fontWeight || "var(--text-semibold)"};
  font-family: ${props => props.font || "San Francisco"};
`

export default TextItem
