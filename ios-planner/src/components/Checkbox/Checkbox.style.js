import styled, { css } from "styled-components"
// maps
const Colors = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
}

const checkboxVariants = {
  primary: "var(--color-dark-lighten0)",
  secondary: "var(--color-dark-lighten1)",
}

// styles
export const CheckboxWrapper = styled.input.attrs({ type: "checkbox" })`
  opacity: var(--opacity-100);
  max-width: var(--checkbox-max-width);
`

export const LabelWrapper = styled.label`
  position: relative;
  margin-right: var(--m-md);
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: -19px;
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
    top: 6px;
    left: -15px;
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
