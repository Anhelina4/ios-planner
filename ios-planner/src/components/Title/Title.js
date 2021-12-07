import React from "react"
import TitleItem from "./TitleItem.style"

const Title = props => {
  const { color, fontWeight, fontSize, text, font } = props
  return (
    <TitleItem
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      font={font}>
      {text}
    </TitleItem>
  )
}

export default Title
