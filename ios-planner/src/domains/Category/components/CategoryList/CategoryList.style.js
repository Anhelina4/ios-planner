import styled from "styled-components"

const CategoryListWrapper = styled.div`
  max-height: 380px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
    background-color: var(--color-dark-lighten5);
    border-radius: var(--border-radius-md);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-dark-lighten2);
    border-radius: var(--border-radius-md);
  }
`

export default CategoryListWrapper
