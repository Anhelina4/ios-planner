import React from "react"
import { TaskSimpleView } from ".."
import TaskListWrapper from "./TaskList.style"
import { Col } from "../../../../components"

const TaskList = () => {
  return (
    <TaskListWrapper>
      <Col>
        <TaskSimpleView variant="secondary">My new Task</TaskSimpleView>
      </Col>
    </TaskListWrapper>
  )
}

export default TaskList
