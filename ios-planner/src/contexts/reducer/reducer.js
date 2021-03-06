import createCategory from "./сreateCategory"
import createTask from "./сreateTask"
import deleteCategory from "./deleteCategory"
import deleteTask from "./deleteTask"
import editCategory from "./editCategory"
import editTask from "./editTask"
import defineCurrentCategory from "./defineCurrentCategory"
import flagTask from "./flagTask"
import checkTask from "./checkTask"
import filterAll from "./filterAll"
import filterFlagged from "./filterFlagged"
import updateData from "./updateData"

const reducer = (state, action) => {
  const { type, payload } = action

  const actionsMap = {
    createCategory,
    createTask,
    deleteCategory,
    deleteTask,
    editCategory,
    editTask,
    defineCurrentCategory,
    flagTask,
    checkTask,
    filterAll,
    filterFlagged,
    updateData,
  }

  return actionsMap[type](state, payload)
}

export default reducer
