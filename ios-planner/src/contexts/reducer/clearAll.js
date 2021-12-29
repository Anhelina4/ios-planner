export const clearAll = (state, payload) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (payload.permission) {
    console.log(payload.permission)
    newState.currentCategory.tasksList = []
    newState.currentCategory.categoryName = payload.categoryName
    newState.currentCategory.categoryId = payload.categoryId
  }
  return { ...newState }
}
