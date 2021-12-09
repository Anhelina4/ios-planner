import React from "react"
import {
  SwitcherWrapper,
  IconWrapper,
  ContainerWrapper,
} from "./Switcher.style"
import { Text } from "../../components"

const Switcher = props => {
  const { icon, variant, className} = props

  return (
    <SwitcherWrapper className={className}>
      <ContainerWrapper>
        <IconWrapper variant={variant}>{icon}</IconWrapper>
        <Text>Today</Text>
      </ContainerWrapper>
      <Text size="md" children="0" />
    </SwitcherWrapper>
  )
}

export default Switcher
