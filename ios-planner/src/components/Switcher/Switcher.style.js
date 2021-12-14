import styled, { css } from "styled-components"

// map
const switcherVariants = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  darkGrey: "var(--color-dark-lighten0)",
  lightGrey: "var(--color-dark-lighten1)",
}

// styles
export const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--p-md);
  background: ${props =>
    props.active
      ? switcherVariants[props.variant]
      : "var(--color-dark-lighten3)"};
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
  color: ${props =>
    props.active ? switcherVariants[props.variant] : "var(--color-white)"};
  background-color: ${props => switcherVariants[props.variant]};

  ${props =>
    props.active &&
    css`
      background-color: ${props =>
        props.active ? "var(--color-white)" : switcherVariants[props.variant]};
    `};
`

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
