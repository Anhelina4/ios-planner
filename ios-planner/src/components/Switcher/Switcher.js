import React from "react"
import {
  SwitcherWrapper,
  IconWrapper,
  ContainerWrapper,
} from "./Switcher.style"
import { Text } from "../../components"

const Switcher = props => {
  const { icon, variant} = props

  return (
    <SwitcherWrapper variant={variant} className="par">
      <ContainerWrapper >
        <IconWrapper variant={variant}>{icon}</IconWrapper>
        <Text >Today</Text>
      </ContainerWrapper>
      <Text size="md" children="0" variant={variant}/>
    </SwitcherWrapper>
  )
}

export default Switcher
