import React from "react"
import { TaskSimpleView, TaskSimpleForm } from ".."
import TaskListWrapper from "./TaskList.style"
import { Col } from "../../../../components"

const TaskList = () => {
  return (
    <TaskListWrapper>
      <Col>
        <TaskSimpleView variant="secondary" className="mb-lg">My new Task</TaskSimpleView>
      </Col>
      <Col focused>
        <TaskSimpleView variant="secondary" className="mb-lg">My new Task</TaskSimpleView>
      </Col>
      <Col>
        <TaskSimpleView variant="secondary" className="mb-lg">My new Task</TaskSimpleView>
      </Col>
      <Col>
        <TaskSimpleForm variant="secondary" className="mb-lg">My new Task</TaskSimpleForm>
      </Col>
    </TaskListWrapper>
  )
}

export default TaskList
