import React from "react"
import {
  Input,
  InputIconLeft,
  InputIconRight,
  InputWrapper,
} from "./Input.style"

const SearchInput = props => {
  const { icon1, button, color } = props
  return (
    <InputWrapper>
      <InputIconLeft>{icon1}</InputIconLeft>
      <Input></Input>
      <InputIconRight>{button}</InputIconRight>
    </InputWrapper>
  )
}

export default SearchInput
