import styled, { css } from "styled-components"

const TextItem = styled.div`
  color: ${props => props.color || "var(--color-dark)"};
  font-size: ${props => props.fontSize || "var(--text-md)"};
  font-weight: ${props => props.fontWeight || "var(--text-semibold)"};

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

export default TextItem
