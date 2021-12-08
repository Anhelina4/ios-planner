import styled from "styled-components"

export const Input = styled.input.attrs({ placeholder: "Search" })`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  border-radius: var(--br-lg);
  border: none;
  padding: var(--p-md);
  margin: var(--p-md);
  font-size: var(--text-sm);
  box-sizing: border-box;
  background: var(--color-dark-lighten5);
  cursor: text;
  padding-left: var(--p-xxl);
  color: var(--color-dark-lighten1);
  &:hover {
    background: var(--color-dark-lighten5);
  }
  &:focus {
    outline: none;
    cursor: default;
    border-radius: var(--br-md);
    box-shadow: 0px 0px 0px 4px rgb(79, 143, 238, 0.84);
    transition-property: border;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
`
export const InputIconLeft = styled.div`
  position: absolute;
  top: 3px;
  left: 8px;
`
export const InputIconRight = styled.div`
  position: absolute;
  top: 1px;
  right: 0px;
`

export const InputWrapper = styled.div`
  position: relative;
`
