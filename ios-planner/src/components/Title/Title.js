import React from "react"
import TitleWrapper from "./Title.style"

const Title = props => {
  const { color, variant, size, children, className, onClick } = props

  return (
    <TitleWrapper variant={variant} color={color} size={size} className={className} onClick={onClick}>
      {children}
    </TitleWrapper>
  )
}

export default Title
