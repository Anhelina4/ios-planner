import styled from "styled-components"

const Input = styled.input`
display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: 6px;
  border: none;
  padding: 4px 4px;
  margin: 4px 4px;
  font-size: 12px;
  box-sizing: border-box;
  background: rgb(190, 190, 190);
  cursor: text;
  &:hover{
    background: #1493b994;
  }
  &:focus{
    outline: none;
  cursor: default;
  border-radius: 3px;
  box-shadow: 0px 0px 0px 4px rgb(79, 143, 238, 0.84);
  transition-property: border;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  }
`

export default Input