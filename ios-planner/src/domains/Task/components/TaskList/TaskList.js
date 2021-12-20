import React from "react"
import { TaskSimpleView, TaskSimpleForm } from ".."
import TaskListWrapper from "./TaskList.style"
import { Col } from "../../../../components"
import { usePlannerContext } from "../../../../contexts/hooks"

const TaskList = () => {
  const { state, showtsf } = usePlannerContext()
  return (
    <TaskListWrapper>
      <Col>
        {state?.currentCategory?.tasksList?.length > 0
          ? state.currentCategory.tasksList.map((item, index) => {
              return (
                <TaskSimpleView
                  variant="secondary"
                  taskId={item.taskId}
                  key={index}>
                  {item.taskName}
                  {item.taskNotes}
                </TaskSimpleView>
              )
            })
          : null}
      </Col>
      <Col>
        {showtsf ? (
          <TaskSimpleForm variant="secondary" className="mb-lg" />
        ) : null}
      </Col>
    </TaskListWrapper>
  )
}

export default TaskList
