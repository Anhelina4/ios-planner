import React from "react"
import {
  SwitcherWrapper,
  IconWrapper,
  ContainerWrapper,
} from "./Switcher.style"
import { Text } from "../../components"

const Switcher = props => {
  const { icon, bg } = props

  return (
    <SwitcherWrapper>
      <ContainerWrapper>
        <IconWrapper bg={bg}>{icon}</IconWrapper>
        <Text>Today</Text>
      </ContainerWrapper>
      <Text size="md" children="0" />
    </SwitcherWrapper>
  )
}

export default Switcher
