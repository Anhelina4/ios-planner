const editCategory = (state, payload) => {
  const newState = { ...state }
  newState.categories.map(item => {
    if (item.categoryId === payload.categoryId) {
      item.categoryName = payload.editedCategoryName
      return { ...item }
    }
  })
  return { ...newState }
}
export default editCategory
