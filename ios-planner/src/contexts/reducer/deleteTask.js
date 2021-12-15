const deleteTask = (state, payload) => {
  const newState = { ...state }

  newState.currentCategory.categoryTasks =
    state.currentCategory.categoryTasks.filter(item => {
      return item.taskId !== payload.taskId
    })

  return { ...newState }
}

export default deleteTask
