const сreateTask = (state, payload) => {
  const newState = JSON.parse(JSON.stringify(state))

  // change currentCategory
  newState.currentCategory.categoryTasks = [
    ...newState.currentCategory.categoryTasks,
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
      ? (item.categoryTasks = [
          ...item.categoryTasks,
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
