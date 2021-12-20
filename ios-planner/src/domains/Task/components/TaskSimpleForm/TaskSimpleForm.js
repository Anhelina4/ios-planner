import React from "react"
import { Col, Row, Container } from "../../../../components/Grid"
import { Checkbox, Button } from "../../../../components"
import { InputWrapper, TaskSimpleFormWrapper } from "./TaskSimpleForm.style.js"
import { AiFillFlag } from "react-icons/ai"
import { MdClose } from "react-icons/md"

const TaskSimpleForm = props => {
  const {
    checked,
    color,
    variant,
    onDelete,
    onClick,
    valueTask,
    valueNotes,
    onChangeTask,
    onChangeNotes,
    onKeyDown,
  } = props
  return (
    <Container className="mt-xl">
      <TaskSimpleFormWrapper>
        <Row>
          <Col cw="auto">
            <Checkbox checked={checked} />
          </Col>
          <Col className="d-flex direction-col">
            <InputWrapper
              tabIndex="1"
              className="text-md"
              type="text"
              autoFocus
              value={valueTask}
              onClick={onClick}
              onChange={onChangeTask}
              onKeyDown={onKeyDown}
            />
            <InputWrapper
             tabIndex="2"
              type="text"
              value={valueNotes}
              onClick={onClick}
              onChange={onChangeNotes}
              onKeyDown={onKeyDown}
            />
          </Col>
          <Col cw="auto" className="d-flex align-start">
            <Button color={color} variant={variant}>
              {<AiFillFlag />}
            </Button>
            <Button variant="primary" active onClick={onDelete}>
              {<MdClose />}
            </Button>
          </Col>
        </Row>
      </TaskSimpleFormWrapper>
    </Container>
  )
}

export default TaskSimpleForm
