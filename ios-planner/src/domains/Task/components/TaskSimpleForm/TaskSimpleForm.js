import React from "react"
import { Col, Row, Container } from "../../../../components/Grid"
import { Checkbox, Button } from "../../../../components"
import { InputWrapper, TaskSimpleFormWrapper } from "./TaskSimpleForm.style.js"
import { AiFillFlag } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { usePlannerContext } from "../../../../contexts/hooks"
import { useTaskActions } from "../../hooks"

const TaskSimpleForm = props => {
  const { checked, color, variant } = props
  const { taskName, setTaskName, taskNotes, setTaskNotes } = usePlannerContext()
  const { createTask } = useTaskActions()
  return (
    <Container className="mt-xl">
      <TaskSimpleFormWrapper>
        <Row>
          <Col cw="auto">
            <Checkbox checked={checked} />
          </Col>
          <Col className="d-flex direction-col">
            <InputWrapper
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              onKeyDown={e=> e.key === "Enter" ? createTask(taskName, taskNotes) : null}
            />
            <InputWrapper
              value={taskNotes}
              placeholder="Notes"
              onChange={e => setTaskNotes(e.target.value)}
              onKeyDown={e=> e.key === "Enter" ? createTask(taskName, taskNotes) : null}
            />
          </Col>
          <Col cw="auto" className="d-flex align-start">
            <Button color={color} variant={variant}>
              {<AiFillFlag />}
            </Button>
            <Button variant="primary" active>
              {<MdClose />}
            </Button>
          </Col>
        </Row>
      </TaskSimpleFormWrapper>
    </Container>
  )
}

export default TaskSimpleForm
