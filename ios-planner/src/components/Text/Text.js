import React from "react"
import TextItem from "./TextItem.style"

const Text = props => {
  const { color, size, text, font } = props
  return (
    <TextItem color={color} size={size}>
      {text}
    </TextItem>
  )
}

export default Text
