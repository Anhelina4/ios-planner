import React from "react"
import { SwitcherWrapper, IconWrapper } from "./Switcher.style"
import { Text } from "../../components"
import { Col, Row, Container } from "../../components/Grid"

const Switcher = props => {
  const { icon, variant, active, children } = props

  return (
    <SwitcherWrapper variant={variant} active={active}>
      <Container variant="md">
        <Row className="justify-between">
          <Col className="mb-none pb-none mt-none pt-none">
            <IconWrapper active={active} variant={variant}>
              {icon}
            </IconWrapper>
          </Col>
          <Col cw="auto" className="mb-none pb-none mt-none pt-none">
              <Text 
                size="lg"
                children="0"
                color= {active ? "white" : null}
                className="text-semibold"
              />
          </Col>
        </Row>
        <Row className="mt-none">
            <Col className="mt-none pt-none mb-none pb-none">
              <Text
                size="md"
                children={children}
                color={active ? "white" : null}
                className="text-semibold"
              />
            </Col>
        </Row>
      </Container>
    </SwitcherWrapper>
  )
}

export default Switcher
