import { useContext } from "react"
import PlannerContext from "../PlannerContext"

const usePlannerContext = () => {
  useContext(PlannerContext)
}

export default usePlannerContext
