const defineCurrentCategory = (state, payload) => {
  
  console.log(state)
  state.categories.map(item => {
    if (item.categoryId === payload.categoryId) {
      state.currentCategory = item
      console.log(state)
      return { ...state }
    }
  })
  return { ...state }
}

export default defineCurrentCategory
