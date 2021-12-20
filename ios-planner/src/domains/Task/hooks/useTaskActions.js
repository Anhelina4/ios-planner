import { usePlannerContext } from "../../../contexts/hooks"

const useTaskActions = () => {
  const { dispatch } = usePlannerContext()

  const createTask = (taskName, taskNotes) => {
    dispatch({ type: "createTask", payload: { taskName, taskNotes } })
  }

  return  {createTask} 
}

export default useTaskActions
