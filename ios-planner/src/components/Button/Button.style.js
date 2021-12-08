import styled, { css } from "styled-components"

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-lg);
  line-height: var(--line-height-md);
  color: var(--color-dark);
  padding: var(--p-sm);
  background: transparent;
  border: none;
  border-radius: var(--br-lg);
  cursor: pointer;
  font-weight: var(--text-semibold);

  ${props =>
    props.color === "light" &&
    css`
      color: var(--color-dark-lighten1);
    `}

  ${props =>
    props.color === "blue" &&
    css`
      color: var(--color-blue);
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
    props.size === "md" &&
    css`
      height: var(--btn-md);
      font-size: var(--text-md);
    `}

  ${props =>
    props.size === "sm" &&
    css`
      height: var(--btn-sm);
      font-size: var(--text-sm);
    `}

    ${props =>
    props.size === "lg" &&
    css`
      height: var(--btn-lg);
      font-size: var(--text-xl);
    `}
  
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--m-none) var(--m-sm);
`
