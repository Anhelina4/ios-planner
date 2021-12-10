import styled, { css } from "styled-components"

// map
const switcherVariants = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  darkGrey: "var(--color-dark)",
  lightGrey: "var(--color-dark-lighten1)",
}

// styles
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
    props.variant &&
    css`
      background-color: ${props=> switcherVariants[props.variant]};
    `}
`

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
