import { usePlannerContext } from "../../../contexts/hooks"
import firestoreService from "../../../services/firebase/firestoreMethods"

const useTaskActions = () => {
  const { state, dispatch, setTaskName, setTaskNotes, taskName, taskNotes } =
    usePlannerContext()

  const createTask = (taskName, taskNotes, taskId) => {
    dispatch({ type: "createTask", payload: { taskName, taskNotes, taskId } })
    setTaskName("")
    setTaskNotes("")
    firestoreService.createDocument("task", taskId, {
      taskName: taskName,
      taskNotes: taskNotes,
      taskId: taskId,
      parentId: state.currentCategory.categoryId,
      flag: false,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  const deleteTask = taskId => {
    dispatch({ type: "deleteTask", payload: { taskId } })
    console.log(taskId)
    firestoreService.deleteDocument("task", taskId)
  }

  const editTask = (editedTaskName, taskId, editedTaskNotes) => {
    dispatch({
      type: "editTask",
      payload: { editedTaskName, taskId, editedTaskNotes },
    })
    firestoreService.updateDocument("task", taskId, {
      taskName: editedTaskName ? editedTaskName : taskName,
      taskNotes: editedTaskNotes ? editedTaskNotes : taskNotes,
    })
  }

  const checkTask = (taskId, status) => {
    console.log(taskName, taskNotes)
    dispatch({ type: "checkTask", payload: { taskId, status } })
    firestoreService.updateDocument("task", taskId, {
      status: status ? status : false,
    })
  }

  const flagTask = (taskId, flag) => {
    dispatch({ type: "flagTask", payload: { taskId, flag } })
    firestoreService.updateDocument("task", taskId, {
      flag: flag ? flag : false,
    })
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
      payload: { children: "With flag", id: "/withflag" },
    })
  }

  const filterChecked = (categoryName, categoryId, permission) => {
    dispatch({
      type: "filterChecked",
      payload: { categoryName, categoryId, permission },
    })
    console.log(permission)
  }

  const clearAll = (categoryName, categoryId, permission) => {
    dispatch({
      type: "clearAll",
      payload: { categoryName, categoryId, permission },
    })
    console.log("clear")
  }
  return {
    createTask,
    deleteTask,
    editTask,
    checkTask,
    flagTask,
    filterAll,
    filterFlagged,
    filterChecked,
    clearAll,
  }
}

export default useTaskActions
