import React, { useState } from "react"
import TaskSimpleViewWrapper from "./TaskSimpleView.style"
import { Checkbox, Button } from "../../../../components"
import { Row, Col } from "../../../../components/Grid"
import { AiFillFlag } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { useTaskActions } from "../../hooks"
import { TaskSimpleForm } from ".."
import { usePlannerActions, usePlannerContext } from "../../../../contexts/hooks"

const TaskSimpleView = props => {
  const { color, variant, checked, children, taskId, taskName, taskNotes } = props
  const { deleteTask, editTask } = useTaskActions()
  const { dispatch, setShowTSF } = usePlannerContext()
  const { hideComponent } = usePlannerActions()
  const [editedTaskName, setEditedTaskName] = useState(taskName)
  const [editedTaskNotes, setEditedTaskNotes] = useState(taskNotes)
  const [editable, setEditable] = useState(false)
  return (
    <>
      {!editable ? (
        <TaskSimpleViewWrapper>
          <Row>
            <Col cw="auto" className="d-flex align-start">
              <Checkbox checked={checked} />
            </Col>
            <Col>
              <Row className="direction-col">
                <Col className="pl-md pr-md text-md" onClick={e => {
                setEditable(true)
                e.stopPropagation()
                setEditedTaskName(taskName)
                hideComponent(setShowTSF)
              }}>{children[0]}</Col>
                <Col className="pl-md pr-md text-sm">{children[1]}</Col>
              </Row>
            </Col>
            <Col cw="auto" className="d-flex">
              <Button color={color} variant={variant}>
                {<AiFillFlag />}
              </Button>
              <Button
                variant="primary"
                active
                onClick={() => deleteTask(taskId)}>
                {<MdClose />}
              </Button>
            </Col>
          </Row>
        </TaskSimpleViewWrapper>
      ) : (
        <TaskSimpleForm
        variant="secondary"
          onClick={e => {
            setEditable(false)
            e.stopPropagation()
          }}
          onChangeTask={e => setEditedTaskName(e.target.value)}
          onChangeNotes={e => setEditedTaskNotes(e.target.value)}
          valueTask={editedTaskName}
          valueNotes={editedTaskNotes}
          onKeyDown={e => {
            if (e.key === "Enter") {
              editTask(editedTaskName, taskId)
              setEditable(false)
            }
          }}
          onDelete={()=>deleteTask(taskId)}></TaskSimpleForm>
      )}
    </>
  )
}

export default TaskSimpleView
