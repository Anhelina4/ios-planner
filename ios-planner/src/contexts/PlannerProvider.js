import { useReducer } from "react"
import PlannerContext from "./PlannerContext"
import reducer from "./reducer"

const PlannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {currentCategory:[], categories: []})

  return <PlannerContext.Provider value={state, dispatch}>{children}</PlannerContext.Provider>
}

export default PlannerProvider
