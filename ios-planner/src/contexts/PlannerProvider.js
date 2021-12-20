import { useReducer, useState } from "react"
import PlannerContext from "./PlannerContext"
import reducer from "./reducer"

const PlannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentCategory: [],
    categories: [],
  })
  const [categoryName, setCategoryName] = useState()
  
  const [taskName, setTaskName] = useState()
  const [taskNotes, setTaskNotes] = useState()
  const [showtsf, setShowTSF] = useState(false)
  const [showcsf, setShowCSF] = useState(false)
  
  return (
    <PlannerContext.Provider
      value={{ state, dispatch, categoryName, setCategoryName, showtsf, setShowTSF, taskName, setTaskName, taskNotes, setTaskNotes, showcsf, setShowCSF }}>
      {children}
    </PlannerContext.Provider>
  )
}

export default PlannerProvider
