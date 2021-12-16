import styled, { css } from "styled-components"

// maps
const Colors = {
  blue: "var(--color-blue)",
  blueLighten: "var(--color-blue-lighten)",
  blueLighten1: "var(--color-blue-lighten1)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
}

const btnVariants = {
  primary: "var(--color-dark-lighten0)",
  secondary: "var(--color-dark-lighten1)",
  disabled: "var(--color-dark-lighten2)",
}

const btnSizes = {
  sm: { height: "var(--btn-sm)", fontSize: "var(--text-sm)" },
  md: { height: "var(--btn-md)", fontSize: "var(--text-md)" },
  lg: { height: "var(--btn-lg)", fontSize: "var(--text-lg)" },
  xl: { height: "var(--btn-xl)", fontSize: "var(--text-xl)" },
}

// styles
export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => btnSizes[props.size] || "var(--text-md)"};
  line-height: ${props => btnSizes[props.size] || "var(--text-md)"};
  color: ${props => Colors[props.color] || "var(--color-dark)"};
  padding: var(--p-sm);
  background: transparent;
  border: none;
  border-radius: var(--border-radius-lg);
  cursor: ${props => (props.variant === "disabled" ? "default" : "pointer")};
  font-weight: var(--text-semibold);

  ${props =>
    props.color &&
    css`
      color: ${props => Colors[props.color]};
    `}

  ${props =>
    props.variant &&
    css`
      color: ${props => btnVariants[props.variant]};
    `}

    ${props =>
    props.size &&
    css`
      height: ${props => btnSizes[props.size].height};
      font-size: ${props => btnSizes[props.size].fontSize};
    `}

  &:active {
    color: ${props => (props.active ? "var(--color-black)" : "none")};
    border-radius: var(--border-radius-lg);
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--m-none);
  margin-right: var(--m-md);
`
