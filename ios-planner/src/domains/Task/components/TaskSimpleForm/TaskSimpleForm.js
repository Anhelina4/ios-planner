import React from "react"
import { Col, Row } from "../../../../components/Grid"
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
    <TaskSimpleFormWrapper>
      <Row>
        <Col cw="auto" className="d-flex align-start">
          <Checkbox checked={checked} />
        </Col>
        <Col className="d-flex direction-col justify-center">
          <InputWrapper
            className="text-md pb-none"
            type="text"
            autoFocus
            value={valueTask}
            onClick={onClick}
            onChange={onChangeTask}
            onKeyDown={onKeyDown}
          />
          <InputWrapper
            className="pt-none pb-none"
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
  )
}

export default TaskSimpleForm
