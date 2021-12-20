import React from "react"
import { TaskSimpleView, TaskSimpleForm } from ".."
import TaskListWrapper from "./TaskList.style"
import { Col } from "../../../../components"
import { usePlannerContext} from "../../../../contexts/hooks"

const TaskList = () => {
  const {showtsf} = usePlannerContext()
  return (
    <TaskListWrapper>
      <Col>
        <TaskSimpleView variant="secondary" className="mb-lg">
          My new Task
        </TaskSimpleView>
      </Col>
      <Col focused>
        <TaskSimpleView variant="secondary" className="mb-lg">
          My new Task
        </TaskSimpleView>
      </Col>
      <Col>
        <TaskSimpleView variant="secondary" className="mb-lg">
          My new Task
        </TaskSimpleView>
      </Col>
      <Col>
        {showtsf ? <TaskSimpleForm variant="secondary" className="mb-lg"/> : null}
      </Col>
    </TaskListWrapper>
  )
}

export default TaskList
