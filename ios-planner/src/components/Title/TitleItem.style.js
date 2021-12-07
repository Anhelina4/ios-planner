import styled from "styled-components"

const TitleItem = styled.h2`
  color: ${props => props.color || "var(--color-blue)"};
  font-size: ${props => props.fontSize || "var(--title-md)"};
  font-weight: ${props => props.fontWeight || "var(--title-semibold"};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
`

export default TitleItem
