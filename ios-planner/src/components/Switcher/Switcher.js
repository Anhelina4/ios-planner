import React, { useState } from "react"
import { SwitcherWrapper, IconWrapper } from "./Switcher.style"
import { Text } from "../../components"
import { Col, Row, Container } from "../../components/Grid"
import { useNavigate } from "react-router-dom"

const Switcher = props => {
  let navigate = useNavigate()
  const { icon, variant, children, path, id, counter, filter } = props
  const [activeSwitcher, setActiveSwitcher] = useState(false)
 
  return (
    <SwitcherWrapper
      variant={variant}
      active={activeSwitcher}
      id={id}
      onClick={() => {
        navigate(path)
        setActiveSwitcher(!activeSwitcher)
        filter()
      }}>
      <Container >
        <Row className="justify-between">
          <Col className="mb-none pb-none mt-none pt-none">
            <IconWrapper active={activeSwitcher} variant={variant}>
              {icon}
            </IconWrapper>
          </Col>
          <Col cw="auto" className="mb-none pb-none mt-none pt-none">
            <Text
              size="lg"
              children={counter || "0"}
              color={activeSwitcher ? "white" : null}
              className="text-semibold"
            />
          </Col>
        </Row>
        <Row className="mt-none">
          <Col className="mt-none pt-none mb-none pb-none">
            <Text
              size="md"
              children={children}
              color={activeSwitcher ? "white" : null}
              className="text-semibold"
            />
          </Col>
        </Row>
      </Container>
    </SwitcherWrapper>
  )
}

export default Switcher
