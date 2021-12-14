import React from "react"
import { Container, Row, Col } from "../Grid"
import { Sider } from ".."
import { PageLayout } from ".."

const AppLayout = () => {
  return (
    <Container height="100%" variant="fluid">
      <Row height="100%">
        <Col cw="auto">
          <Sider></Sider>
        </Col>
        <Col>
          <PageLayout />
        </Col>
      </Row>
    </Container>
  )
}

export default AppLayout
