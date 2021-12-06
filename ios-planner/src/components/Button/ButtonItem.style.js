import styled from "styled-components"

const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size || null};
  width: ${props => props.size || null};
  font-size: 20px;
  padding: 2px;
  background: transparent;
  border: none;
  color: #4e4d4d;
  border-radius: 6px;
  cursor: pointer;
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
