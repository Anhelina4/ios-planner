import React from "react"
import TextItem from "./TextItem.style"

const Text = props => {
  const { color, fontWeight, fontSize, text, font } = props
  return (
    <TextItem
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      font={font}>
      {text}
    </TextItem>
  )
}

export default Text
