import styled, { css } from "styled-components"

const TitleWrapper = styled.h2`
  color: var(--color-blue);
  font-size: var(--title-md);
  padding: var(--p-md);
  margin: var(--m-md) var(--m-none);
  line-height: var(--lh-md);
  ${props =>
    props.size === "md" &&
    css`
      font-size: var(--title-md);
    `}

  ${props =>
    props.size === "lg" &&
    css`
      font-size: var(--title-lg);
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
    props.variant === "primary" &&
    css`
      color: var(--color-dark);
    `}

    ${props =>
    props.variant === "secondary" &&
    css`
      color: var(--color-dark-lighten0);
    `}

    ${props =>
    props.variant === "disabled" &&
    css`
      color: var(--color-dark-lighten1);
    `}
`


export default TitleWrapper