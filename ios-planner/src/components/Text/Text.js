import React from "react"
import TextWrapper from "./Text.style"

const Text = props => {
  const { variant, color, size, children, className, onClick } = props

  return (
    <TextWrapper
      variant={variant}
      size={size}
      color={color}
      className={className}
      onClick={onClick}>
      {children}
    </TextWrapper>
  )
}

export default Text
