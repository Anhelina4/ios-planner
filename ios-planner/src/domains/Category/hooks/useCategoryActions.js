import { usePlannerContext } from "../../../contexts/hooks"

const useCategoryActions = () => {
  const { dispatch, categoryName, setCategoryName } = usePlannerContext()

  const createCategory = e => {
    if (e.key === "Enter" && categoryName !== "") {
      dispatch({ type: "createCategory", payload: { categoryName } })
      setCategoryName("")
    }
  }

  const editCategory = (editedCategoryName, categoryId) => {
    dispatch({
      type: "editCategory",
      payload: { editedCategoryName, categoryId },
    })
  }

  const deleteCategory = categoryId => {
    dispatch({ type: "deleteCategory", payload: { categoryId } })
  }

  return { createCategory, editCategory, deleteCategory }
}

export default useCategoryActions
