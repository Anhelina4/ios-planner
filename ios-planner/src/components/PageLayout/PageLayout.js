import React from "react"
import { Container, Col, Row } from "../../components/Grid"
import { Header } from "../../components"
import PageLayoutWrapper from "./PageLayout.style"
import { TaskSimpleForm, TaskList } from "../../domains/Task/components"

const PageLayout = () => {
  return (
    <>
      <Container>
        <PageLayoutWrapper>
          <Row>
            <Col>
              <Header color="blue" className="mb-xl">
                New List
              </Header>
            </Col>
          </Row>
          <Row>
            <TaskSimpleForm variant="secondary" />
          </Row>
          <Row>
            <Col>
              <TaskList variant="secondary" />
            </Col>
          </Row>
        </PageLayoutWrapper>
      </Container>
    </>
  )
}

export default PageLayout
