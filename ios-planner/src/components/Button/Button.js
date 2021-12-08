import React from "react"
import { ButtonWrapper, IconWrapper } from "./Button.style"

const Button = props => {
  const { hovered, active, size, children, color, icon, className } = props

  return (
    <>
      {icon && children ? (
        <ButtonWrapper
          color={color}
          hovered={hovered}
          active={active}
          size={size}
          className={className}>
          <IconWrapper>{icon}</IconWrapper>
          {children}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper
          color={color}
          hovered={hovered}
          active={active}
          size={size}
          className={className}>
          {icon || children}
        </ButtonWrapper>
      )}
    </>
  )
}

export default Button
