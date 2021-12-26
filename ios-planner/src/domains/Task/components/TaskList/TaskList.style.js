import styled from "styled-components"

const TaskListWrapper = styled.div`
  max-height: 550px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: var(--color-white);
    border-radius: var(--border-radius-md);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-blue-lighten1);
    border-radius: var(--border-radius-md);
  }
`

export default TaskListWrapper
