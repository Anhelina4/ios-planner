const editCategory = (state, payload) => {
  const newState = { ...state }
  console.log(payload)
  // console.log(payload)
  // newState.currentCategory.categoryName = payload.editedCategoryName
  // newState.categories.map(item => {
  //   const newChangedCategoryId = newState.categories.find(
  //     item => item.categoryId === newState.currentCategory.categoryId
  //   )
  //   const index = newState.categories.indexOf(newChangedCategoryId)
  //   newState.categories[index] = newState.currentCategory
  //   return { ...newState }
  // })
  // return { ...newState }
  newState.categories.map(item=>{
    if (item.categoryId === payload.categoryId){
      
      item.categoryName = payload.editedCategoryName
      console.log(item)
      return {...item}
    }
  })
  return {...newState}
}
export default editCategory
