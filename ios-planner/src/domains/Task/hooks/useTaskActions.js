import { usePlannerContext } from "../../../contexts/hooks"

const useTaskActions = () => {
  const { dispatch, setTaskName, setTaskNotes, taskName, taskNotes, deletedTaskId } =
    usePlannerContext()
  const createTask = e => {
    if (e.key === "Enter" && taskName !== "") {
      dispatch({ type: "createTask", payload: { taskName, taskNotes } })
      setTaskName("")
      setTaskNotes("")
    }
  }

  const deleteTask = taskId => {
    dispatch({ type: "deleteTask", payload: { taskId, deletedTaskId } })
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

  const filterAll = (children, id, deletedTaskId) => {
    dispatch({
      type: "filterAll",
      payload: { children, id, deletedTaskId },
    })
  }

  const filterFlagged = () => {
    dispatch({
      type: "filterFlagged",
      payload: { children: "Flagged", id: "/withflag" },
    })
  }

  return {
    createTask,
    deleteTask,
    editTask,
    checkTask,
    flagTask,
    filterAll,
    filterFlagged,
  }
}

export default useTaskActions
