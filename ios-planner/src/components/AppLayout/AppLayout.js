import React from "react"
import { Container, Row, Col } from "../Grid"
import { Sider } from ".."
import { PageLayout } from ".."
import { TaskSimpleForm, TaskList } from "../../domains/Task/components"
import { Header } from "../../components"
import {TasksAll} from "../../pages/TasksAll"
const AppLayout = () => {
  return (
    <Container height="100%" variant="fluid">
      <Row height="100%">
        <Col cw="auto">
          <Sider></Sider>
        </Col>
        <Col>
          <PageLayout
            header={
              <Header color="blue" className="mb-xl">
                New List
              </Header>
            }
            content={<TasksAll/>}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AppLayout
