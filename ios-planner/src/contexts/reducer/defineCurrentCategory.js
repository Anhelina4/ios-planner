const defineCurrentCategory = (state, payload) => {
  state.categories.map(item => {
    if (item.categoryId === payload.categoryId) {
      state.currentCategory = item

      return { ...state }
    }
  })
  return { ...state }
}

export default defineCurrentCategory
