const filterFlagged = (state, payload) => {
  const newState = JSON.parse(JSON.stringify(state))
  let filteredFlagged = []
  newState.categories.map(item =>
    item.tasksList.map(task => (task.flag ? filteredFlagged.push(task) : null))
  )
  console.log("filteredFlagged", filteredFlagged)
  newState.currentCategory.categoryName = payload.children
  newState.currentCategory.categoryId = payload.id
  newState.currentCategory.tasksList = filteredFlagged
  return { ...newState }
}

export default filterFlagged
