import React from "react"
import { Container, Row, Col } from "../Grid"
import { usePlannerActions, usePlannerContext } from "../../contexts/hooks"
const AppLayout = ({ left, right }) => {
  const { hideComponent, showComponent } = usePlannerActions()
  const { setShowCSF, setShowTSF } = usePlannerContext()

  return (
    <Container height="100%" variant="fluid">
      <Row height="100%">
        <Col
          cw="auto"
          onClick={() => {
            hideComponent(setShowTSF)
          }}
          >
          {left}
        </Col>
        <Col
          onClick={() => {
            hideComponent(setShowCSF)
          }}
          >
          {right}
        </Col>
      </Row>
    </Container>
  )
}

export default AppLayout
