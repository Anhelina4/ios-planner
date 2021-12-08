import styled, { css } from "styled-components"

export const CheckboxWrapper = styled.input.attrs({ type: "checkbox" })`
  opacity: var(--opacity-0);
  margin-right: var(--m-xl);
`

export const LabelWrapper = styled.label`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 2px;
    left: -32px;
    width: var(--checkbox-outer-dot);
    height: var(--checkbox-outer-dot);
    border-radius: var(--br-round);
    background: var(--color-white);
    cursor: pointer;
    border: var(--b-md) solid var(--color-blue);

    ${props =>
      props.size === "md" &&
      css`
        font-size: var(--title-md);
      `}

    ${props =>
      props.size === "lg" &&
      css`
        font-size: var(--title-lg);
      `}

    ${props =>
      props.color === "red" &&
      css`
        border-color: var(--color-red);
      `}

    ${props =>
      props.color === "orange" &&
      css`
        border-color: var(--color-orange);
      `}

    ${props =>
      props.color === "dark" &&
      css`
        border-color: var(--color-dark);
      `}

    ${props =>
      props.color === "light" &&
      css`
        border-color: var(--color-dark-lighten1);
      `}
  }

  &:after {
    content: "";
    position: absolute;
    top: 6px;
    left: -28px;
    width: var(--checkbox-inner-dot);
    height: var(--checkbox-inner-dot);
    border-radius: var(--br-round);
    cursor: pointer;
    background: ${props =>
      props.checked
        ? props.color === "red"
          ? "var(--color-red)"
          : props.color === "orange"
          ? "var(--color-orange)"
          : props.color === "dark"
          ? "var(--color-dark)"
          : props.color === "light"
          ? "var(--color-dark-lighten1)"
          : "var(--color-blue)"
        : null};
  }
`
