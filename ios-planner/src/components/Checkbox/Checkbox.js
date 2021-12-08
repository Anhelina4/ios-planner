import React from "react"
import { CheckboxWrapper, LabelWrapper } from "./Checkbox.style"

const Checkbox = props => {
  const { checked, color } = props

  return (
    <>
      <CheckboxWrapper />
      <LabelWrapper checked={checked} color={color} />
    </>
  )
}

export default Checkbox
