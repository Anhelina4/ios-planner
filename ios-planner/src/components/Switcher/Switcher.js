import React, { useState, useEffect } from "react"
import { SwitcherWrapper, IconWrapper } from "./Switcher.style"
import { Text } from "../../components"
import { Col, Row, Container } from "../../components/Grid"
import { useNavigate } from "react-router-dom"
import { usePlannerContext } from "../../contexts/hooks"

const Switcher = props => {
  let navigate = useNavigate()
  const { deletedTaskId, switcherId, setSwitcherId } = usePlannerContext()
  const { icon, variant, children, path, id, counter, filter } = props
  const [active, setActive] = useState(false)
  console.log(switcherId, id)

  useEffect(() => {
    setActive(switcherId === id ? true : false)
  }, [switcherId])
  return (
    <SwitcherWrapper
      active={active}
      variant={variant}
      id={id}
      onClick={() => {
        setSwitcherId(id)
        // setActive(!active)
        navigate(path)
        if (filter) {
          filter(children, id, deletedTaskId)
        }
      }}>
      <Container>
        <Row className="justify-between">
          <Col className="mb-none pb-none mt-none pt-none">
            <IconWrapper variant={variant} active={active}>
              {icon}
            </IconWrapper>
          </Col>
          <Col cw="auto" className="mb-none pb-none mt-none pt-none">
            <Text
              color={active ? "white" : null}
              size="lg"
              children={counter || "0"}
              className="text-semibold"
            />
          </Col>
        </Row>
        <Row className="mt-none">
          <Col className="mt-none pt-none mb-none pb-none">
            <Text
              color={active ? "white" : null}
              size="md"
              children={children}
              className="text-semibold"
            />
          </Col>
        </Row>
      </Container>
    </SwitcherWrapper>
  )
}

export default Switcher
