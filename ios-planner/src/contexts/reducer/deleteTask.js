const deleteTask = (state, payload) => {
  const newState = { ...state }

  newState.currentCategory.tasksList = state.currentCategory.tasksList.filter(
    item => {
      return item.taskId !== payload.taskId
    }
  )

  return { ...newState }
}

export default deleteTask
