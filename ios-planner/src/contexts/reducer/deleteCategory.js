const deleteCategory = (state, payload) => {
  const newState = { ...state }
  console.log(newState)
  newState.categories = state.categories.filter(item => {
    return item.categoryId !== payload.categoryId
  })

  return newState
}

export default deleteCategory
