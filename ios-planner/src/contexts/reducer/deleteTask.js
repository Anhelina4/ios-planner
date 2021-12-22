const deleteTask = (state, payload) => {
  const newState = { ...state }
  newState.currentCategory.tasksList = state.currentCategory.tasksList.filter(
    item => {
      
      return item.taskId !== payload.taskId
    }
  )
  newState.categories.map(item=>{
    item.tasksList.filter(elem=>{
      return elem.id !== payload.deletedTaskId
    })
    return {...newState}
  })

  return { ...newState }
}

export default deleteTask
