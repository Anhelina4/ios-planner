import styled from "styled-components"

const CounterItem = styled.div`
  color: ${props => props.theme || "#4e4d4d"};
  font-size: ${props => props.size || "20px"};
  font-weight: ${props => props.fontWeight || "var(--text-semibold)"};
`

export default CounterItem
