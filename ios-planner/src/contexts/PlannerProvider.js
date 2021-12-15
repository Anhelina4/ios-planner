import { useReducer, useState } from "react"
import PlannerContext from "./PlannerContext"
import reducer from "./reducer"

const PlannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentCategory: [],
    categories: [],
  })
  const [categoryName, setCategoryName] = useState()
  return (
    <PlannerContext.Provider
      value={{ state, dispatch, categoryName, setCategoryName }}>
      {children}
    </PlannerContext.Provider>
  )
}

export default PlannerProvider
