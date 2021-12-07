import styled from "styled-components"

const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size || "auto"};
  width: ${props => props.size || "auto"};
  font-size: ${props => props.fontSize || "20px"};
  padding: 2px;
  background: transparent;
  border: none;
  color: ${props => props.color || null};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: ${props => (props.hovered ? "#ccc" : "none")};
    border-radius: 6px;
  }
  &:active {
    background: ${props => (props.active ? "#adadad" : "none")};
    border-radius: 6px;
  }
`
export default ButtonItem
