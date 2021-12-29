import React from "react"
import { usePlannerActions, usePlannerContext } from "../../contexts/hooks"
import { InputWrapper, InputStyled, Prefix, Sufix } from "./Input.style"
import { Link, useNavigate } from "react-router-dom"

const SearchInput = props => {
  const { prefix, sufix, className } = props

  const { dispatch, value, setValue } = usePlannerContext()
  const { searchTask } = usePlannerActions(dispatch)
  const navigate = useNavigate()

  return (
    <InputWrapper>
      <Link to="/categories/search" className="decoration-none">
        <InputStyled
          value={value}
          className={className}
          onChange={e => {
            setValue(e.target.value)
            setTimeout(() => searchTask(e.target.value), 300)
            navigate(`/categories/search?name=${e.target.value}`)
          }}
        />
      </Link>
      <Prefix>{prefix}</Prefix>
      <Sufix
        onClick={() => {
          setValue("")
          navigate(`/categories/search?name=`)
        }}>
        {sufix}
      </Sufix>
    </InputWrapper>
  )
}

export default SearchInput
