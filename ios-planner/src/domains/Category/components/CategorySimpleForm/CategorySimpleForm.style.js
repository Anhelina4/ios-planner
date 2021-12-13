import styled from "styled-components"

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--p-md);
  background: var(--color-blue);
  border-radius: var(--border-radius-lg);
  font-size: var(--text-sm);
  line-height: var(--lh-sm);
  box-sizing: border-box;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--m-none) var(--m-md);
  color: var(--color-white);
  margin-top: var(--m-md);
  margin-left: var(--m-md);
  border-radius: var(--border-radius-round);
  height: var(--btn-lg);
  width: var(--btn-lg);
`
