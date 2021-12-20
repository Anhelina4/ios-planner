import { usePlannerContext } from "../../../contexts/hooks"

const useTaskActions = () => {
  const { dispatch, setTaskName, setTaskNotes, taskName, taskNotes } =
    usePlannerContext()

  const createTask = e => {
    if (e.key === "Enter" && taskName !== "") {
      dispatch({ type: "createTask", payload: { taskName, taskNotes } })
      setTaskName("")
      setTaskNotes("")
    }
  }

  const deleteTask = taskId => {
    dispatch({ type: "deleteTask", payload: { taskId } })
  }

  return { createTask, deleteTask }
}

export default useTaskActions
