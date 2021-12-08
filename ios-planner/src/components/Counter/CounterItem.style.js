import styled, { css } from "styled-components"

const CounterItem = styled.div`
  ${props =>
    props.size === "sm" &&
    css`
      color: var(--color-dark-lighten2);
      font-weight: var(--text-regular);
      font-size: var(--text-md);
    `}
  ${props =>
    props.size === "md" &&
    css`
      color: var(--color-dark-lighten0);
      font-weight: var(--text-bold);
      font-size: var(--text-xl);
    `}
${props =>
    props.size === "lg" &&
    css`
      color: var(--color-dark-lighten2);
      font-weight: var(--text-bold);
      font-size: var(--text-xxl);
    `}
`

export default CounterItem
