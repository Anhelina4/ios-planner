import styled, { css } from "styled-components"

export const TaskSimpleFormWrapper = styled.div``

export const InputWrapper = styled.input`
  font-weight: var(--text-regular);
  color: var(--color-dark-lighten0);
  border: none;
  padding: var(--p-md);
  font-size: var(--text-sm);
  line-height: var(--lh-sm);
  box-sizing: border-box;
  cursor: text;

  &:focus-visible {
    outline: none;
  }
`
