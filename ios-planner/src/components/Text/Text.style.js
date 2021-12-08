import styled, { css } from "styled-components"

const TextWrapper = styled.div`
  color: var(--color-dark-lighten0);
  font-size: ${props => props.size || "var(--text-md)"};
  line-height: var(--line-height-md);
  font-weight: var(--text-semibold);
  padding: var(--p-md);

  ${props =>
    props.color === "light" &&
    css`
      color: var(--color-dark-lighten1);
    `}

  ${props =>
    props.color === "dark" &&
    css`
      color: var(--color-dark);
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
