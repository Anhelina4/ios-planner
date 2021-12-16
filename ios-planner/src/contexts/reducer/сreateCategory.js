import { v4 as uuidv4 } from "uuid"

const сreateCategory = (state, payload) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.categories = [
    ...newState.categories,
    {
      categoryName: payload.categoryName,
      categoryId: uuidv4(),
      tasksList: [],
    },
  ]
  return { ...newState }
}

export default сreateCategory
