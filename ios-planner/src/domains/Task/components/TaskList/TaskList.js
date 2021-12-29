import React from "react"
import { TaskSimpleView, TaskSimpleForm } from ".."
import TaskListWrapper from "./TaskList.style"
import { Col } from "../../../../components"
import { usePlannerContext } from "../../../../contexts/hooks"
import { useTaskActions } from "../../hooks"
import { v4 as uuidv4 } from "uuid"

const TaskList = props => {
  const { display } = props
  const { state, showtsf, taskName, taskNotes, setTaskName, setTaskNotes } =
    usePlannerContext()
  const { createTask } = useTaskActions()
  const taskId = uuidv4()

  return (
    <TaskListWrapper>
      <Col>
        {state?.currentCategory?.tasksList?.length > 0 &&
          state?.currentCategory?.tasksList.map((item, index) => {
            if ((display === "Show" && !item.status) || display === "Hide") {
              return (
                <TaskSimpleView
                  variant="secondary"
                  taskId={item.taskId}
                  key={index}
                  taskStatus={item.status}
                  taskFlag={item.flag}
                  taskName={item.taskName}
                  taskNotes={item.taskNotes}>
                  {item.taskName}
                  {item.taskNotes}
                </TaskSimpleView>
              )
            }
          })}
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
            onKeyDown={e => {
              if (e.key === "Enter" && taskName !== "") {
                createTask(taskName, taskNotes, taskId)
              }
            }}
          />
        ) : null}
      </Col>
    </TaskListWrapper>
  )
}

export default TaskList
