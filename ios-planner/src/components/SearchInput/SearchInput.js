import React, { useState, useEffect } from "react"
import { usePlannerActions, usePlannerContext } from "../../contexts/hooks"
import { InputWrapper, InputStyled, Prefix, Sufix } from "./Input.style"
import { Link, useNavigate } from "react-router-dom"
import { createBrowserHistory } from "history"
const SearchInput = props => {
  const { prefix, sufix, className } = props
  const [value, setValue] = useState()
  const { dispatch } = usePlannerContext()
  const { searchTask } = usePlannerActions(dispatch)
  const navigate = useNavigate()
  const history = createBrowserHistory()

  return (
    <InputWrapper>
      <Link to="/categories/search" className="decoration-none">
        <InputStyled
          value={value}
          className={className}
          onChange={e => {
            setValue(e.target.value)
            searchTask(e.target.value)
            navigate(`/categories/search?name=${e.target.value}`)
          }}
        />
      </Link>
      <Prefix>{prefix}</Prefix>
      <Sufix onClick={() => setValue("")}>{sufix}</Sufix>
    </InputWrapper>
  )
}

export default SearchInput
