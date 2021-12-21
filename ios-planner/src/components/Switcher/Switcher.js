import React from "react"
import { SwitcherWrapper, IconWrapper } from "./Switcher.style"
import { Text } from "../../components"
import { Col, Row, Container } from "../../components/Grid"
import { useNavigate } from "react-router-dom"

const Switcher = props => {
  let navigate = useNavigate()
  const { icon, variant, active, children, path } = props

  return (
    <SwitcherWrapper
      variant={variant}
      active={active}
      onClick={() => {
        navigate(path)
      }}>
      <Container>
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
              color={active ? "white" : null}
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
