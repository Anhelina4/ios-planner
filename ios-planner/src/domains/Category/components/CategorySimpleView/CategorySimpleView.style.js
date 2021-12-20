import styled, { css } from "styled-components"

// maps
const Colors = {
  blue: "var(--color-blue)",
  blueLighten: "var(--color-blue-lighten)",
  blueLighten1: "var(--color-blue-lighten1)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
}

export const CategoryWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--p-md);
  background: var(--color-dark-lighten5);
  border-radius: var(--border-radius-lg);
  font-size: var(--text-sm);
  line-height: var(--lh-sm);
  box-sizing: border-box;
    ${props =>
      props.focused &&
      css`
        background: var(--color-blue-lighten);
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
