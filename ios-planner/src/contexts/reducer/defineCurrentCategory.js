const defineCurrentCategory = (state, payload) => {
  state.categories.forEach(item => {
    if (item.categoryId === payload.categoryId) {
      state.currentCategory = item

      return { ...state }
    }
  })

  
  return { ...state }
}

export default defineCurrentCategory
