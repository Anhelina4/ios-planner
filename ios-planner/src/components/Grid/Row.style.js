import styled, { css } from "styled-components"

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: green;
  box-sizing: border-box;
  margin-top: calc(var(--p-none) * -1);
  margin-right: calc(1.5rem * -0.5);
  margin-left: calc(1.5rem * -0.5);

  & > * & {
    
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
  
  & + & {
    margin-top: 1rem;
  }
`

export default RowWrapper
