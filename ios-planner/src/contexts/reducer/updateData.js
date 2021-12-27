const updateData = (state, payload) => {
  console.log("Payload", payload)
  const newState = JSON.parse(JSON.stringify(state))
  newState.categories = payload.categories
  console.log("NewState", newState)

  let arr = newState.categories.map(category => {
    payload.tasks.map(task =>
      category.categoryId === task.parentId
        ? category.tasksList.push(task)
        : null
    )
    return category
  })
  arr.map(i => {
    return (i.tasksList = Array.from(new Set(i.tasksList)))
  })
  console.log("arr", arr)
  return { ...newState }
}

export default updateData
