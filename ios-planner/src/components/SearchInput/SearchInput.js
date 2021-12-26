import React, { useState } from "react"
import { usePlannerActions, usePlannerContext } from "../../contexts/hooks"
import { InputWrapper, InputStyled, Prefix, Sufix } from "./Input.style"
import { Link } from "react-router-dom"
const SearchInput = props => {
  const { prefix, sufix, className } = props
  const [value, setValue] = useState()
  const { dispatch } = usePlannerContext()
  const { searchTask } = usePlannerActions(dispatch)
  console.log(value)
  return (
    <InputWrapper>
      <Link to={`/categories/search`} className="decoration-none">
        <InputStyled
        value={value}
          className={className}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => (e.key === "Enter" ? searchTask(value) : null)}
        />
      </Link>
      <Prefix>{prefix}</Prefix>
      <Sufix onClick={()=>setValue("")}>{sufix}</Sufix>
    </InputWrapper>
  )
}

export default SearchInput
