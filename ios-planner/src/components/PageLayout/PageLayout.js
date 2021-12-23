import React from "react"
import { Container, Col, Row } from "../../components/Grid"
import PageLayoutWrapper from "./PageLayout.style"

const PageLayout = ({ header, content }) => {
  return (
    <>
      <Container>
        <PageLayoutWrapper>
          <Row>
            <Col>{header}</Col>
          </Row>
          <Row>
            <Col>{content}</Col>
          </Row>
        </PageLayoutWrapper>
      </Container>
    </>
  )
}

export default PageLayout
