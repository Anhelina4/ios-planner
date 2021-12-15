import React from "react"
import { CheckboxWrapper, LabelWrapper } from "./Checkbox.style"

const Checkbox = props => {
  const { checked, color, variant, className } = props

  return (
    <>
      <CheckboxWrapper />
      <LabelWrapper
        checked={checked}
        color={color}
        variant={variant}
        className={className}
      />
    </>
  )
}

export default Checkbox
