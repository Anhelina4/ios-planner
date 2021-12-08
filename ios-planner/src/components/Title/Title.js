import React from "react"
import TitleWrapper from "./Title.style"

const Title = props => {
  const { color, size, children } = props

  return (
    <TitleWrapper color={color} size={size}>
      {children}
    </TitleWrapper>
  )
}

export default Title
