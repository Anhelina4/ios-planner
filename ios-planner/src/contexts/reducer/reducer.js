import createCategory from "./сreateCategory"
import createTask from "./сreateTask"
import deleteCategory from "./deleteCategory"
import deleteTask from "./deleteTask"
import editCategory from "./editCategory"
import editTask from "./editTask"

const reducer = (state, action) => {
  const { type, payload } = action

  const actionsMap = {
    createCategory,
    createTask,
    deleteCategory,
    deleteTask,
    editCategory,
    editTask,
  }

  return actionsMap[type](state, payload)
}

export default reducer
