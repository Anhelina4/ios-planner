import styled from "styled-components"

export const InputStyled = styled.input.attrs({
  placeholder: "Search",
})`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border: unset;
  border-radius: var(--border-radius-md);
  line-height: var(--lh-sm);
  font-size: var(--text-sm);
  font-family: var(--font-family-main);
  padding: var(--p-md) var(--p-xxl);
  background: var(--color-dark-lighten3);
  display: block;

  &:hover {
    background: var(--color-dark-lighten4);
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
  top: 50%;
  left: 8px;
  font-size: var(--text-lg);
  line-height: var(--text-lg);
  display: flex;
  transform: translate(0, -50%);
`
export const Sufix = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  font-size: var(--text-lg);
  line-height: var(--text-lg);
  display: flex;
  transform: translate(0, -50%);
`

export const InputWrapper = styled.div`
  position: relative;
`
