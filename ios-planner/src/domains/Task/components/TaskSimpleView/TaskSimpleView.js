import React, { useEffect, useState } from "react"
import TaskSimpleViewWrapper from "./TaskSimpleView.style"
import { Checkbox, Button, Text } from "../../../../components"
import { Row, Col } from "../../../../components/Grid"
import { AiFillFlag } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { useTaskActions } from "../../hooks"
import { TaskSimpleForm } from ".."
import {
  usePlannerActions,
  usePlannerContext,
} from "../../../../contexts/hooks"

const TaskSimpleView = props => {
  const {
    variant,
    children,
    taskId,
    taskName,
    taskStatus,
    taskFlag,
    taskNotes,
    onClick,
  } = props
  const { deleteTask, editTask, checkTask, flagTask } = useTaskActions()
  const { setShowTSF, setTaskName, setTaskNotes } = usePlannerContext()
  const { hideComponent } = usePlannerActions()
  const [editedTaskName, setEditedTaskName] = useState(taskName)
  const [editedTaskNotes, setEditedTaskNotes] = useState(taskNotes)
  const [editable, setEditable] = useState(false)
  console.log("change taskStatus->", taskStatus)
  console.log("taskName", taskName)
  return (
    <>
      {!editable ? (
        <TaskSimpleViewWrapper onClick={onClick}>
          <Row>
            <Col cw="auto" className="d-flex align-start">
              <Checkbox
                checked={taskStatus}
                onClick={() => {
                  checkTask(taskId, !taskStatus)
                }}
              />
            </Col>
            <Col>
              <Row className="d-flex direction-col justify-start">
                <Col className=" pl-md pr-md text-md" cw="auto">
                  <Text
                    className="pb-none pt-none pl-none pr-none text-md"
                    onClick={e => {
                      setEditable(true)
                      setEditedTaskName(taskName)
                      hideComponent(setShowTSF)
                    }}>
                    {children[0]}
                  </Text>
                </Col>
                <Col cw="auto" className="pl-md pr-md text-sm cursor-pointer">
                  {children[1]}
                </Col>
              </Row>
            </Col>
            <Col cw="auto" className="d-flex align-start">
              <Button
                checked={taskFlag}
                variant={variant}
                onClick={() => {
                  flagTask(taskId, !taskFlag)
                }}>
                {<AiFillFlag />}
              </Button>
              <Button
                variant="primary"
                active
                onClick={() => {
                  deleteTask(taskId)
                }}>
                {<MdClose />}
              </Button>
            </Col>
          </Row>
        </TaskSimpleViewWrapper>
      ) : (
        <TaskSimpleForm
          status={taskStatus}
          flag={taskFlag}
          variant="secondary"
          onChangeTask={e => setEditedTaskName(e.target.value)}
          onChangeNotes={e => setEditedTaskNotes(e.target.value)}
          valueTask={editedTaskName}
          valueNotes={editedTaskNotes}
          onKeyDown={e => {
            if (e.key === "Enter") {
              editTask(editedTaskName, taskId, editedTaskNotes)
              setEditable(false)
            }
          }}
          // onDelete={() => deleteTask(taskId)}
        ></TaskSimpleForm>
      )}
    </>
  )
}

export default TaskSimpleView
