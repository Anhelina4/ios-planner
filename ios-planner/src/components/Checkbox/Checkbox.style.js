import styled, { css } from "styled-components"

export const CheckboxWrapper = styled.input.attrs({ variant: "checkbox" })`
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
      props.variant === "secondary" &&
      css`
        border-color: var(--color-dark-lighten1);
      `}

      ${props =>
      props.variant === "primary" &&
      css`
        border-color: var(--color-dark);
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
