import styled from "styled-components"

 const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props=>props.size};
  width: ${props=>props.size};
  font-size: 20px;
  padding: 2px;
  background: transparent;
  border: none;
  color: #4e4d4d;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${props=>props.hovered ? "#ccc" : "none"};
    border-radius: 4px;
  }
  &:active {
    background: ${props=>props.active ? "#adadad" : "none"};
    border-radius: 4px;
  }
`
export default ButtonItem
// export const ButtonSecondary = styled(ButtonPrimary)`
//   border-radius: 50%;
//   padding: 2px;
//   border: 1px solid  #4e4d4d ;
//   background: ${props=>props.outlined ? "white" : "#4e4d4d"};
//   color: ${props=>props.outlined ? "#4e4d4d" : "white"};
//   font-size: 12px;
//   height: 14px;
//   width: 14px;
//   &:hover {
//     background: ${props=>props.outlined ? "white" : "#4e4d4d"};;
//     border-radius: 12px;
//   }
//   &:active {
//     background: ${props=>props.outlined ? "white" : "#4e4d4d"};;
//     border-radius: 12px;
//   }
// `




