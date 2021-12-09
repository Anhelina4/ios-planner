import styled, { css } from "styled-components"

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: green;
  padding: var(--p-none) 1.5rem;
  margin-top: calc(var(--p-none) * -1);
  margin-right: calc(1.5rem  * -0.5);
  margin-left: calc(1.5rem  * -0.5);
`

export default RowWrapper
