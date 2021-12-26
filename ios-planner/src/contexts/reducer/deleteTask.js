const deleteTask = (state, payload) => {
  const newState = { ...state }
  newState.currentCategory.tasksList = state.currentCategory.tasksList.filter(
    item => {
      return item.taskId !== payload.taskId
    }
  )

  // console.log("parentId", parentId)
  // console.log("updated category", updatedCategory)
  // console.log(newState.categories)
  return { ...newState }
}
export default deleteTask

// const deleteTask = (state, payload) => {
//   const newState = { ...state }
//   newState.currentCategory.tasksList = state.currentCategory.tasksList.filter(
//     item => {

//       return item.taskId !== payload.taskId
//     }
//   )

//   return { ...newState }
// }

// export default deleteTask
