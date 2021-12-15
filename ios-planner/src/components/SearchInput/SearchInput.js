import React from "react"
import { InputWrapper, InputStyled, Prefix, Sufix } from "./Input.style"

const SearchInput = props => {
  const { prefix, sufix, className } = props

  return (
    <InputWrapper>
      <InputStyled className={className} />
      <Prefix>{prefix}</Prefix>
      <Sufix>{sufix}</Sufix>
    </InputWrapper>
  )
}

export default SearchInput
