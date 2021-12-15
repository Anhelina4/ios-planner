import styled from "styled-components"

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: calc(var(--p-none) * -1);
  height: ${props => props.height};

  & > * & {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
`

export default RowWrapper
