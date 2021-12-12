import styled, { css } from "styled-components"

// maps
const Colors = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  white: "var(--color-white)",
}

const textVariants = {
  primary: "var(--color-dark)",
  secondary: "var(--color-dark-lighten1)",
  disabled: "var(--color-dark-lighten1)",
}

const textSizes = {
  sm: "var(--text-sm)",
  md: "var(--text-md)",
  lg: "var(--text-lg)",
  xl: "var(--text-xl)",
  xxl: "var(--text-xxl)",
}

// styles
const TextWrapper = styled.div`
  color: var(--color-dark-lighten0);
  font-size: var(--text-md);
  line-height: var(--lh-md);
  font-weight: var(--text-regular);
  padding: var(--p-md);

  ${props =>
    props.variant &&
    css`
      color: ${props => textVariants[props.variant]};
    `}

  ${props =>
    props.color &&
    css`
      color: ${props => Colors[props.color]};
    `}

  ${props =>
    props.size &&
    css`
      font-size: ${props => textSizes[props.size]};
    `}
`

export default TextWrapper
