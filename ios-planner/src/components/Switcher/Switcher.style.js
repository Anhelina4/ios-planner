import styled, { css } from "styled-components"

export const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--p-md);
  background: var(--color-dark-lighten2);
  border-radius: var(--border-radius-xxl);
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--m-md);
  margin-left: var(--m-md);
  border-radius: var(--border-radius-round);
  height: var(--btn-lg);
  width: var(--btn-lg);
  color: var(--color-white);
  background-color: var(--color-blue);

  ${props =>
    props.variant === "red" &&
    css`
      background-color: var(--color-red);
    `}

  ${props =>
    props.variant === "orange" &&
    css`
      background-color: var(--color-orange);
    `}

    ${props =>
    props.variant === "dark-grey" &&
    css`
      background-color: var(--color-dark);
    `}

    ${props =>
    props.variant === "light-grey" &&
    css`
      background-color: var(--color-dark-lighten1);
    `}
`

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
