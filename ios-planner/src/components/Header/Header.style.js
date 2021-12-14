import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  white: "var(--color-white)",
}

const titleVariants = {
  primary: "var(--color-dark-lighten0)",
  secondary: "var(--color-dark-lighten1)",
  disabled: "var(--color-dark-lighten2)",
}

export const HeaderWrapper = styled.h1`
  font-size: var(--title-xl);
  color: ${props => Colors[props.color] || "var(--color-blue)"};
  font-weight: var(--title-extraBold);
  margin: var(--m-none);
  ${props =>
    props.variant &&
    css`
      color: ${props => titleVariants[props.variant]};
    `}
`
export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-dark-lighten3);
`
