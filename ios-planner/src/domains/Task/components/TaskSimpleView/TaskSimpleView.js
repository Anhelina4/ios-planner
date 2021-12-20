import React from "react"
import TaskSimpleViewWrapper from "./TaskSimpleView.style"
import { Checkbox, Button } from "../../../../components"
import { Row, Col, Container } from "../../../../components/Grid"
import { AiFillFlag } from "react-icons/ai"
import { MdClose } from "react-icons/md"

const TaskSimpleView = props => {
  const { color, variant, checked, children } = props
console.log(children)
  return (
    <Container className="pt-xl">
      <TaskSimpleViewWrapper>
        <Row>
          <Col cw="auto" className="d-flex align-start">
            <Checkbox checked={checked} />
          </Col>
          <Col>
            <Row className="direction-col">
              <Col className="pl-md pr-md">{children[0]}</Col>
              <Col className="pl-md pr-md text-sm">{children[1]}</Col>
            </Row>
          </Col>
          <Col cw="auto" className="d-flex">
            <Button color={color} variant={variant}>
              {<AiFillFlag />}
            </Button>
            <Button variant="primary" active>
              {<MdClose />}
            </Button>
          </Col>
        </Row>
      </TaskSimpleViewWrapper>
    </Container>
  )
}

export default TaskSimpleView
