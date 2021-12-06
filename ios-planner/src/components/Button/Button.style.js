import styled from "styled-components"

export const ButtonPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  font-size: 20px;
  padding: 2px;
  background: transparent;
  border: none;
  color: #4e4d4d;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: rgb(199, 199, 199);
    border-radius: 4px;
  }
  &:active {
    background: rgb(161, 161, 161);
    border-radius: 4px;
  }
`

export const ButtonSecondary = styled(ButtonPrimary)`
  border-radius: 50%;
  padding: 2px;
  border: 1px solid  #4e4d4d ;
  background: ${props=>props.outlined ? "white" : "#4e4d4d"};
  color: ${props=>props.outlined ? "#4e4d4d" : "white"};
  font-size: 12px;
  height: 14px;
  width: 14px;
  &:hover {
    background: ${props=>props.outlined ? "white" : "#4e4d4d"};;
    border-radius: 12px;
  }
  &:active {
    background: ${props=>props.outlined ? "white" : "#4e4d4d"};;
    border-radius: 12px;
  }
`




