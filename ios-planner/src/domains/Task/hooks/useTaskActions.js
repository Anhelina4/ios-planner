import { usePlannerContext } from "../../../contexts/hooks"

const useTaskActions = () => {
  const { dispatch, setTaskName, setTaskNotes } = usePlannerContext()

  const createTask = (taskName, taskNotes) => {
    dispatch({ type: "createTask", payload: { taskName, taskNotes } })
    setTaskName("")
    setTaskNotes("")
  }

  return  {createTask} 
}

export default useTaskActions
