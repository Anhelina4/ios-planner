import React from "react"
import TaskSimpleViewWrapper from "./TaskSimpleView.style"
import { Checkbox, Button } from "../../../../components"
import { Row, Col, Container } from "../../../../components/Grid"
import { AiFillFlag } from "react-icons/ai"
import { MdClose } from "react-icons/md"

const TaskSimpleView = props => {
  const { color, variant, checked, children } = props

  return (
    <Container className="mt-xl">
      <Row>
        <Col cw="auto">
          <Checkbox checked={checked} />
        </Col>
        <Col>
          <TaskSimpleViewWrapper>{children}</TaskSimpleViewWrapper>
        </Col>
        <Col cw="auto" className="d-flex ">
          <Button color={color} variant={variant}>
            {<AiFillFlag />}
          </Button>
          <Button variant="primary" active>
            {<MdClose />}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskSimpleView
