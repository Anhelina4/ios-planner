import React from "react"
import ButtonItem from "./ButtonItem.style"

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
  return (
    <>
      {icon && text ? (
        <ButtonItem
          hovered={hovered}
          active={active}
          size={size}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          className={className}>
          {icon}
          {text}
        </ButtonItem>
      ) : (
        <ButtonItem
          hovered={hovered}
          active={active}
          size={size}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          className={className}>
          {icon || text}
        </ButtonItem>
      )}
    </>
  )
}

export default Button
