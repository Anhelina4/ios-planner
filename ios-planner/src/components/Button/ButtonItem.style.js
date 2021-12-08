import styled, { css } from "styled-components"

export const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-lg);
  color: ${props=>props.color || "var(--color-dark)"};
  ${props=> props.color === "light" && css`
    color: var(--color-dark-lighten1);
  `}
  ${props =>
    props.size === "md" &&
    css`
      height: var(--btn-md);
      width: var(--btn-md);
      font-size: var(--text-md);
    `}

  ${props =>
    props.size === "sm" &&
    css`
      height: var(--btn-sm);
      width: var(--btn-sm);
      font-size: var(--text-sm);
    `}
    ${props =>
    props.size === "lg" &&
    css`
      height: var(--btn-lg);
      width: var(--btn-lg);
      font-size: var(--text-xxl);
    `}
  padding: var(--p-sm);
  background: transparent;
  border: none;
  border-radius: var(--br-lg);
  cursor: pointer;
  font-family: San Francisco;
  font-weight: ${props => props.fontWeight || "var(--text-semibold)"};
  &:hover {
    background: ${props =>
      props.hovered ? "var(--color-dark-lighten6)" : "none"};
    border-radius: var(--br-lg);
  }
  &:active {
    background: ${props =>
      props.active ? "var(--color-dark-lighten4)" : "none"};
    border-radius: var(--br-lg);
  }
`

export const TextWrapper = styled.div`
  display:flex;
  padding: var(--p-sm) var(--p-md);
  width: auto;
`
