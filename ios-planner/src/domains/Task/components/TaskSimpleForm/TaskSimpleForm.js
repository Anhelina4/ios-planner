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
    <Container className="mt-xl">
      <TaskSimpleFormWrapper >
        <Row>
          <Col cw="auto">
            <Checkbox checked={checked} />
          </Col>
          <Col className="d-flex direction-col">
            <InputWrapper />
            <InputWrapper placeholder="Notes" />
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
