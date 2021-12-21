const checkTask = (state, payload) => {
  const newState = { ...state }

  newState.currentCategory.tasksList = newState.currentCategory.tasksList.map(
    item => {
      return item.taskId === payload.taskId
        ? {
            ...item,
            status: payload.status,
          }
        : { ...item }
    }
  )
  newState.categories.map(item=>{
      return item.categoryId === newState.currentCategory.categoryId ?
      (item.tasksList = newState.currentCategory.tasksList) : null
  })
  return { ...newState }
}

export default checkTask
