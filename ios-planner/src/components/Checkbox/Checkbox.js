import React from "react"
import { CheckboxWrapper, LabelWrapper } from "./Checkbox.style"

const Checkbox = props => {
  const { checked, color, variant, className, onClick, onCheckedChanged } =
    props

  return (
    <>
      <CheckboxWrapper />
      <LabelWrapper
        checked={checked}
        color={color}
        variant={variant}
        className={className}
        onCheckedChanged={onCheckedChanged}
        onClick={onClick}
      />
    </>
  )
}

export default Checkbox
