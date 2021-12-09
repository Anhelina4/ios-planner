import styled, { css } from "styled-components"

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: green;
  padding: var(--p-none) 1.5rem;
  margin-top: calc(var(--p-none) * -1);
  margin-right: calc(1.5rem * -0.5);
  margin-left: calc(1.5rem * -0.5);

  & > * & {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(1.5rem * 0.5);
    padding-left: calc(1.5rem * 0.5);
  }
  
  & + & {
    margin-top: 1rem;
  }
`

export default RowWrapper
