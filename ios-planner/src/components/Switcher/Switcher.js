import React from "react"
import { SwitcherItem, DivWrapper, IconWrapper } from "./SwitcherItem.style"
import { Counter, Text } from "../../components"

const Switcher = props => {
  const { icon, backgroundColor } = props
  return (
    <SwitcherItem>
      <DivWrapper style={{justifyContent: "space-between"}}>
        <IconWrapper backgroundColor={backgroundColor} >{icon}</IconWrapper>
        <Counter size="md" count="0"></Counter>
      </DivWrapper>
      <Text text="Today"></Text>
    </SwitcherItem>
  )
}

export default Switcher
