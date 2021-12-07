import styled from "styled-components"

const CounterItem = styled.div`
  color: ${props => props.color || "var(--color-dark-lighten2)"};
  font-size: ${props => props.size || "var(--text-xl)"};
  font-weight: ${props => props.fontWeight || "var(--text-semibold)"};
`

export default CounterItem
