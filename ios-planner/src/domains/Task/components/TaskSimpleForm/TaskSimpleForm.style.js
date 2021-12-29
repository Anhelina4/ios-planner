import styled from "styled-components"

export const TaskSimpleFormWrapper = styled.div`
  border-bottom: 1px solid var(--color-dark-lighten3);
  padding: var(--p-lg) var(--p-md) var(--p-lg) var(--p-md);
  margin-bottom: var(--m-lg);
`

export const InputWrapper = styled.input`
  font-weight: var(--text-regular);
  color: var(--color-dark-lighten0);
  border: none;
  padding: var(--p-md) var(--p-md);
  font-size: var(--text-sm);
  line-height: var(--lh-sm);
  box-sizing: border-box;
  font-family: var(--font-main);
  cursor: text;

  &:focus-visible {
    outline: none;
  }
`
