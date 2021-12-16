import { useState } from "react"
import { usePlannerContext } from "../../../contexts/hooks"

const useCategoryActions = () => {
  const { dispatch, categoryName, setCategoryName, editedCategoryName } = usePlannerContext()

  const createCategory = e => {
    if (e.key === "Enter") {
      dispatch({ type: "createCategory", payload: { categoryName } })
      setCategoryName("")
    }
  }

  const editCategory = (editedCategoryName, categoryId) =>{
    dispatch({type:"editCategory", payload:{editedCategoryName, categoryId}})
  }

  return { createCategory, editCategory }
}

export default useCategoryActions
