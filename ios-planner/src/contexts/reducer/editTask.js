const editTask = (state, payload) => {
  const newState = { ...state }

  newState.currentCategory.tasksList = newState.currentCategory.tasksList.map(
    item => {
      return item.taskId === payload.taskId
        ? {
            ...item,
            taskName: payload.editedTaskName ? payload.editedTaskName : item.taskName,
            taskNotes: payload.editedTaskNotes ? payload.editedTaskNotes : item.taskNotes,
            // flag : payload.taskFlag ? payload.taskFlag : item.flag,
            // status: payload.taskStatus ? payload.taskStatus : item.status
          }
        : { ...item }
    }
  )
  const updatedCategory = newState.currentCategory.tasksList
  const parentId = newState.currentCategory.tasksList[0].parentId
  newState.categories.filter(item => {
    return item.categoryId === parentId ? (item = updatedCategory) : null
  })
  return { ...newState }
}

export default editTask
