import { useState } from "react"
import { usePlannerContext } from "../../../contexts/hooks"

const useCategoryActions = () => {
  const { dispatch, categoryName, setCategoryName } = usePlannerContext()

  const createCategory = e => {
    if (e.key === "Enter") {
      dispatch({ type: "createCategory", payload: { categoryName } })
      setCategoryName("")
    }
  }

  return { createCategory }
}

export default useCategoryActions
