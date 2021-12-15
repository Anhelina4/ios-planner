import styled, { css } from "styled-components"

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--p-md);
  background: var(--color-blue-lighten);
  border-radius: var(--border-radius-lg);
  font-size: var(--text-sm);
  line-height: var(--lh-sm);
  box-sizing: border-box;
  ${props =>
    !props.focused &&
    css`
      background: var(--color-dark-lighten3);
    `}
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--m-none) var(--m-md);
  color: var(--color-white);
  border-radius: var(--border-radius-round);
  height: var(--btn-lg);
  width: var(--btn-lg);
  background: var(--color-blue);
`
