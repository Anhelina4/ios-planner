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

  const editTask = (editedTaskName, taskId) =>{
    dispatch({type:"editTask", payload:{editedTaskName, taskId}})
  }

  return { createTask, deleteTask, editTask }
}

export default useTaskActions
