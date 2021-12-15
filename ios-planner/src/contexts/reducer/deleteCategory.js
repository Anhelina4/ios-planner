const deleteCategory = (state, payload) => {
  const newState = { ...state }

  newState.categories = state.categories.filter(item => {
    return item.categoryId !== payload.categoryId
  })
  newState.currentCategory = {}

  return newState
}

export default deleteCategory
