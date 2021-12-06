import styled from "styled-components"

const CounterItem = styled.div`
  color: ${props => props.theme || "#4e4d4d"};
  font-size: ${props => props.size || "20px"};
`

export default CounterItem
