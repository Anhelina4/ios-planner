import { usePlannerContext } from "../../../contexts/hooks"
import firestoreService from "../../../services/firebase/firestoreMethods"

const useCategoryActions = () => {
  const { dispatch, categoryName, setCategoryName } = usePlannerContext()

  const createCategory = (categoryName, categoryId) => {
    dispatch({ type: "createCategory", payload: { categoryName, categoryId } })
    firestoreService.createDocument("category", categoryId, {
      categoryId: categoryId,
      categoryName: categoryName,
      tasksList: [],
    })

    setCategoryName("")
  }

  const editCategory = (editedCategoryName, categoryId) => {
    dispatch({
      type: "editCategory",
      payload: { editedCategoryName, categoryId },
    })
    firestoreService.updateDocument("category", categoryId, {
      categoryId: categoryId,
      categoryName: editedCategoryName,
      tasksList: [],
    })
  }

  const deleteCategory = categoryId => {
    dispatch({ type: "deleteCategory", payload: { categoryId } })
    firestoreService.deleteDocument("category", categoryId)
  }

  return { createCategory, editCategory, deleteCategory }
}

export default useCategoryActions
