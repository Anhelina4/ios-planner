import React from "react"
import {
  SwitcherWrapper,
  IconWrapper,
  ContainerWrapper,
} from "./Switcher.style"
import { Text } from "../../components"

const Switcher = props => {
  const { icon, variant, active, children } = props

  return (
    <SwitcherWrapper variant={variant} active={active}>
      <ContainerWrapper>
        <IconWrapper active={active} variant={variant}>
          {icon}
        </IconWrapper>
        {!active ? (
          <Text size="md" className="text-semibold" children={children} />
        ) : (
          <Text
            color="white"
            size="md"
            className="text-semibold"
            children={children}
          />
        )}
      </ContainerWrapper>
      {!active ? (
        <Text size="lg" children="0" className="text-semibold" />
      ) : (
        <Text size="lg" children="0" color="white" className="text-semibold" />
      )}
    </SwitcherWrapper>
  )
}

export default Switcher
