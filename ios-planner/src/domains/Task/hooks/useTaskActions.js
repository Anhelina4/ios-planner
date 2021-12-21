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

  const editTask = (editedTaskName, taskId, editedTaskNotes) => {
    dispatch({
      type: "editTask",
      payload: { editedTaskName, taskId, editedTaskNotes },
    })
  }

  const checkTask = (taskId, status) => {
    dispatch({ type: "checkTask", payload: { taskId, status } })
  }

  const flagTask = (taskId, flag) => {
    dispatch({ type: "flagTask", payload: { taskId, flag } })
  }

  return { createTask, deleteTask, editTask, checkTask, flagTask }
}

export default useTaskActions
