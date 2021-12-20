import React from "react"
import { ButtonWrapper, IconWrapper } from "./Button.style"

const Button = props => {
  const {
    hovered,
    active,
    size,
    variant,
    children,
    color,
    icon,
    className,
    onClick,
  } = props

  return (
    <>
      {icon && children ? (
        <ButtonWrapper
          color={color}
          variant={variant}
          hovered={hovered}
          active={active}
          size={size}
          className={className}
          onClick={onClick}>
          <IconWrapper>{icon}</IconWrapper>
          {children}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper
          color={color}
          variant={variant}
          hovered={hovered}
          active={active}
          size={size}
          onClick={onClick}
          className={className}>
          {icon || children}
        </ButtonWrapper>
      )}
    </>
  )
}

export default Button
