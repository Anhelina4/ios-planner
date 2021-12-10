import styled, { css } from "styled-components"
// maps
const Colors = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
}

const checkboxVariants = {
  primary: "var(--color-dark)",
  secondary: "var(--color-dark-lighten1)",
}

// styles
export const CheckboxWrapper = styled.input.attrs({ type: "checkbox" })`
  opacity: var(--opacity-0);
  margin-right: var(--m-xl);
  max-width: var(--checkbox-max-width);
`

export const LabelWrapper = styled.label`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 4px;
    left: -35px;
    width: var(--checkbox-outer-dot);
    height: var(--checkbox-outer-dot);
    border-radius: var(--border-radius-round);
    background: var(--color-white);
    cursor: pointer;
    border: var(--border-md) solid var(--color-blue);
    color: var(--color-blue);
    ${props =>
    props.color &&
    css`
      border-color: ${props => Colors[props.color]};
    `}

  ${props =>
    props.variant &&
    css`
      border-color: ${props => checkboxVariants[props.variant]};
    `}
  }
  

  &:after {
    content: "";
    position: absolute;
    top: 8px;
    left: -31px;
    width: var(--checkbox-inner-dot);
    height: var(--checkbox-inner-dot);
    border-radius: var(--border-radius-round);
    cursor: pointer;
    background: ${props =>
      props.checked
        ? props.color === "red"
          ? "var(--color-red)"
          : props.color === "orange"
          ? "var(--color-orange)"
          : props.variant === "primary"
          ? "var(--color-dark)"
          : props.variant === "secondary"
          ? "var(--color-dark-lighten1)"
          : "var(--color-blue)"
        : null};
  }
`
