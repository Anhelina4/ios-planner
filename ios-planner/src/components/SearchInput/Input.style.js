import styled from "styled-components"

export const InputWrapper = styled.input.attrs({
  placeholder: "Search",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  border-radius: var(--border-radius-lg);
  border: none;
  padding: var(--p-md);
  margin: var(--m-md);
  font-size: var(--text-sm);
  line-height: var(--lh-sm);
  box-sizing: border-box;
  background: var(--color-dark-lighten5);
  cursor: text;
  padding-left: var(--p-xxl);
  color: var(--color-dark-lighten0);
  &:hover {
    background: var(--color-dark-lighten5);
  }
  &:focus {
    outline: none;
    cursor: default;
    border-radius: var(--border-radius-md);
    box-shadow: 0px 0px 0px 4px rgb(79, 143, 238, 0.84);
    transition: border 0.1s ease-in;
  }
`
export const Prefix = styled.div`
  position: absolute;
  top: -25px;
  left: 10px;
`
export const Sufix = styled.div`
  position: absolute;
  top: -25px;
  right: 0px;
`

export const InputInnerWrapper = styled.div`
  position: relative;
`
