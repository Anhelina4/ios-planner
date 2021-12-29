const filterAll = (state, payload) => {
  console.log("payload", payload.deletedTaskId)
  const newState = JSON.parse(JSON.stringify(state))
  let filteredAll = []
  newState.categories.map(item =>
    item.tasksList.map(task => filteredAll.push(task))
  )
  console.log("filteredAll", filteredAll)
  newState.currentCategory.categoryName = payload.children
  newState.currentCategory.categoryId = payload.id
  newState.currentCategory.tasksList = filteredAll

  return { ...newState }
}

export default filterAll
