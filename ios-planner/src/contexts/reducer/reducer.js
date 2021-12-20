import createCategory from "./сreateCategory"
import createTask from "./сreateTask"
import deleteCategory from "./deleteCategory"
import deleteTask from "./deleteTask"
import editCategory from "./editCategory"
import editTask from "./editTask"
import defineCurrentCategory from "./defineCurrentCategory"

const reducer = (state, action) => {
  const { type, payload } = action

  const actionsMap = {
    createCategory,
    createTask,
    deleteCategory,
    deleteTask,
    editCategory,
    editTask,
    defineCurrentCategory
  }

  return actionsMap[type](state, payload)
}

export default reducer
