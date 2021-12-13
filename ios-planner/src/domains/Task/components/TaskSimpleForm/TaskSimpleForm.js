import React from "react"
import { Col, Row, Container } from "../../../../components/Grid"
import { Checkbox, Button } from "../../../../components"
import { InputWrapper } from "./TaskSimpleForm.style.js"
import { AiFillFlag } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { TaskSimpleFormWrapper } from "../TaskSimpleForm/TaskSimpleForm.style"
const TaskSimpleForm = props => {
  const { checked, color, variant } = props
  return (
    <>
      <Container>
        <Row>
          <Col cw="auto">
            <Checkbox checked={checked} />
          </Col>

          <Col className="direction-col">
            <InputWrapper />
            <TaskSimpleFormWrapper>
              <InputWrapper placeholder="Notes" />
            </TaskSimpleFormWrapper>
          </Col>

          <Col cw="auto" className="align-start">
            <Button color={color} variant={variant}>
              {<AiFillFlag />}
            </Button>
            <Button>{<MdClose />}</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TaskSimpleForm