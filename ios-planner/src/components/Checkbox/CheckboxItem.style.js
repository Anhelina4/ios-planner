import styled from "styled-components"

export const CheckboxItem = styled.input.attrs({ type: "checkbox" })`
  opacity: var(--unvisible);
`
export const StyledCheckbox = styled.label`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;
    width: var(--checkbox-size-md);
    height: var(--checkbox-size-md);
    border-radius: var(--br-round);
    background: var(--color-white);
    cursor: pointer;
    border: var(--b-md) solid ${props=> props.backgroundColor ? props.backgroundColor : "var(--color-blue)"};
  }
  &:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: var(--checkbox-size-sm);
    height: var(--checkbox-size-sm);
    border-radius: var(--br-round);
    background: var(--color-blue);
    background: ${props =>  props.checked ? props.backgroundColor : "var(--color-white)"};
    cursor: pointer;
  }
`
