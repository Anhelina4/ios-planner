const сreateCategory = (state, payload) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.categories = [
    ...newState.categories,
    {
      categoryName: payload.categoryName,
      categoryId: payload.categoryId,
      tasksList: [],
    },
  ]
  return { ...newState }
}

export default сreateCategory
