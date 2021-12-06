import styled from "styled-components"

const CounterItem = styled.div`
  color: ${props => (props.theme ? props.theme : "green")};
  font-size: ${props => (props.size ? props.size : "20px")};
`

export default CounterItem
