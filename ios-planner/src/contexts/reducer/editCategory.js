const editCategory = (state, payload) => {
  const newState = { ...state }

  newState.currentCategory.categoryName = payload.editedCategoryName
  newState.categories.map(item => {
    const newChangedCategoryId = newState.categories.find(
      item => item.categoryId === newState.currentCategory.categoryId
    )
    const index = newState.categories.indexOf(newChangedCategoryId)
    newState.categories[index] = newState.currentCategory
    return { ...newState }
  })
  return { ...newState }
}
export default editCategory
