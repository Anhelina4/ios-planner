import React from "react"
import { CheckboxItem, StyledCheckbox } from "./CheckboxItem.style"

const Checkbox = props => {
  const { checked, backgroundColor } = props
  return (
    <div>
      <CheckboxItem></CheckboxItem>
      <StyledCheckbox
        checked={checked}
        backgroundColor={backgroundColor}></StyledCheckbox>
    </div>
  )
}

export default Checkbox
