import styled from "styled-components"
import ButtonPrimary from "./ButtonPrimary"

const ButtonSecondary = styled(ButtonPrimary)`
  border-radius: 50%;
  padding: 2px;
  border: 1px solid  #4e4d4d ;
  background: ${props=>props.outlined ? "white" : "#4e4d4d"};
  color: ${props=>props.outlined ? "#4e4d4d" : "white"};
  font-size: 12px;
  height: 14px;
  width: 14px;
`

export default ButtonSecondary
