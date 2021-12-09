import React from "react"
import TitleWrapper from "./Title.style"

const Title = props => {
  const { color, variant, size, children, className } = props

  return (
    <TitleWrapper variant={variant} color={color} size={size} className={className}>
      {children}
    </TitleWrapper>
  )
}

export default Title
