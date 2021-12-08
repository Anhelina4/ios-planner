import React from "react"
import TitleItem from "./TitleItem.style"

const Title = props => {
  const { color, size, text } = props
  return (
    <TitleItem
      color={color}
      size={size}>
      {text}
    </TitleItem>
  )
}

export default Title
