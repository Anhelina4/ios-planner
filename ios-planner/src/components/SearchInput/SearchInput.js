import React from "react"
import { InputWrapper, Prefix, Sufix, InputInnerWrapper } from "./Input.style"

const SearchInput = props => {
  const { prefix, sufix } = props

  return (
    <>
      <InputWrapper />
      <InputInnerWrapper>
        <Prefix>{prefix}</Prefix>
        <Sufix>{sufix}</Sufix>
      </InputInnerWrapper>
    </>
  )
}

export default SearchInput
