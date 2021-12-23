import { useContext } from "react"
import PlannerContext from "../PlannerContext"

const usePlannerContext = () => {
  return useContext(PlannerContext)
}

export default usePlannerContext
