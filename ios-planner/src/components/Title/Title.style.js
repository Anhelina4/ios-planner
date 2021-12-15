import styled, { css } from "styled-components"

// maps
const Colors = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
}

const titleSizes = {
  sm: "var(--title-sm)",
  md: "var(--title-md)",
  lg: "var(--title-lg)",
}

const titleVariants = {
  primary: "var(--color-dark-lighten0)",
  secondary: "var(--color-dark-lighten1)",
  disabled: "var(--color-dark-lighten2)",
}

// styles
const TitleWrapper = styled.h2`
  font-size: var(--title-md);
  padding: var(--p-md);
  margin: var(--m-md) var(--m-none);
  line-height: var(--lh-md);
  color: var(--color-dark);
  ${props =>
    props.size &&
    css`
      font-size: ${props => titleSizes[props.size]};
    `}

  ${props =>
    props.color &&
    css`
      color: ${props => Colors[props.color]};
    `}

    ${props =>
    props.variant &&
    css`
      color: ${props => titleVariants[props.variant]};
    `}
`

export default TitleWrapper
