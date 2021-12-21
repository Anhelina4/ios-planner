import React from "react"
import { TaskSimpleView, TaskSimpleForm } from ".."
import TaskListWrapper from "./TaskList.style"
import { Col } from "../../../../components"
import { usePlannerContext } from "../../../../contexts/hooks"
import { useTaskActions } from "../../hooks"

const TaskList = () => {
  const { state, showtsf, taskName, taskNotes, setTaskName, setTaskNotes } =
    usePlannerContext()
  const { createTask } = useTaskActions()

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
          <TaskSimpleForm
            variant="secondary"
            className="mb-lg"
            valueTask={taskName}
            valueNotes={taskNotes}
            onChangeTask={e => setTaskName(e.target.value)}
            onChangeNotes={e => setTaskNotes(e.target.value)}
            onKeyDown={createTask}
          />
        ) : null}
      </Col>
    </TaskListWrapper>
  )
}

export default TaskList
