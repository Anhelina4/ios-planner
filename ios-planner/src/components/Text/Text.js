import React from "react"
import TextWrapper from "./Text.style"

const Text = props => {
  const { color, size, children } = props

  return (
    <TextWrapper color={color} size={size}>
      {children}
    </TextWrapper>
  )
}

export default Text
