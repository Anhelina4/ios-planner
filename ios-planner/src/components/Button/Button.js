import React from "react"
import {ButtonItem, TextWrapper} from "./ButtonItem.style"

const Button = props => {
  const {
    hovered,
    active,
    size,
    text,
    color,
    fontSize,
    icon,
    fontWeight,
    className,
  } = props
  console.log(props)
  return (
    <>
      {icon && text ? (
        <ButtonItem
        color={color}
          hovered={hovered}
          active={active}
          size={size}
          fontSize={fontSize}
          className={className}>
          <TextWrapper>{icon}</TextWrapper>
          <TextWrapper>{text}</TextWrapper>
        </ButtonItem>
      ) : (
        <ButtonItem
        color={color}
          hovered={hovered}
          active={active}
          size={size}
          fontSize={fontSize}
          className={className}>
          {icon || text}
        </ButtonItem>
      )}
    </>
  )
}

export default Button
