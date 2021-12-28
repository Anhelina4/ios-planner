export const filterChecked = (state, payload) => {
  const newState = JSON.parse(JSON.stringify(state))
  let filteredChecked = []
  if (payload.permission === "Hide") {
    newState?.currentCategory.tasksList.map(item => {
      return !item.status ? filteredChecked.push(item) : null
    })

    console.log("filteredChecked", filteredChecked)

    newState.currentCategory.categoryName = payload.categoryName
    newState.currentCategory.categoryId = payload.categoryId
    newState.currentCategory.tasksList = filteredChecked
  } else {
    newState.categories.map(item => {
      return item.categoryId === payload.categoryId
        ? (newState.currentCategory.tasksList = item.tasksList)
        : null
    })
  }
  return { ...newState }
}
