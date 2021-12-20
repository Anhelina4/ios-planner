const editTask = (state, payload) => {
  const newState = { ...state }

    newState.currentCategory.tasksList = newState.currentCategory.tasksList.map(item => {
      return item.taskId === payload.taskId
        ? { ...item, taskName: payload.editedTaskName }
        : { ...item }
    })
    return { ...newState }
}

export default editTask
