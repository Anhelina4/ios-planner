const сreateTask = (state, payload) => {
  const newState = JSON.parse(JSON.stringify(state))

  // change currentCategory
  newState.currentCategory.tasksList = [
    ...newState.currentCategory?.tasksList,
    {
      taskName: payload.taskName,
      taskNotes: payload.taskNotes,
      taskId: payload.taskId,
      parentId: newState.currentCategory.categoryId,
      flag: false,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  //change categories
  newState.categories.map(item => {
    return item.categoryId === newState.currentCategory.categoryId
      ? (item.tasksList = [
          ...item.tasksList,
          {
            taskName: payload.taskName,
            taskNotes: payload.taskNotes,
            taskId: payload.taskId,
            parentId: newState.currentCategory.categoryId,
            flag: false,
            status: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ])
      : null
  })
  return { ...newState }
}

export default сreateTask
