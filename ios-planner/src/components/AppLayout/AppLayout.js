import React from "react"
import { Container, Row, Col } from "../Grid"

const AppLayout = ({ left, right }) => {
  return (
    <Container height="100%" variant="fluid">
      <Row height="100%">
        <Col cw="auto">{left}</Col>
        <Col>{right}</Col>
      </Row>
    </Container>
  )
}

export default AppLayout
