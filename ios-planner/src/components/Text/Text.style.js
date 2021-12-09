import styled, { css } from "styled-components"

const TextWrapper = styled.div`
  color: var(--color-dark-lighten0);
  font-size: ${props => props.size || "var(--text-md)"};
  line-height: var(--lh-md);
  font-weight: var(--text-semibold);
  padding: var(--p-md);

  ${props =>
    props.variant === "primary" &&
    css`
      color: var(--color-dark);
    `}

  ${props =>
    props.variant === "secondary" &&
    css`
      color: var(--color-dark-lighten0);
    `}

    ${props =>
    props.variant === "disabled" &&
    css`
      color: var(--color-dark-lighten2);
    `}

    ${props =>
    props.color === "red" &&
    css`
      color: var(--color-red);
    `}

    ${props =>
    props.color === "orange" &&
    css`
      color: var(--color-orange);
    `}

    ${props =>
    props.color === "blue" &&
    css`
      color: var(--color-blue);
    `}

  ${props =>
    props.size === "sm" &&
    css`
      font-size: var(--text-sm);
    `}

  ${props =>
    props.size === "md" &&
    css`
      font-size: var(--text-md);
    `}

  ${props =>
    props.size === "lg" &&
    css`
      font-size: var(--text-lg);
    `}

  ${props =>
    props.size === "xl" &&
    css`
      font-size: var(--text-xl);
    `}
    
  ${props =>
    props.size === "xxl" &&
    css`
      font-size: var(--text-xxl);
    `}
`

export default TextWrapper
