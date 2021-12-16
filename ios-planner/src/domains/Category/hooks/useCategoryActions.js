import { usePlannerContext } from "../../../contexts/hooks"

const useCategoryActions = () => {
  const { categoryName, setCategoryName } = usePlannerContext()

  const { dispatch } = usePlannerContext()
  const createCategory = e => {
    if (e.key === "Enter") {
      dispatch({ type: "createCategory", payload: { categoryName } })
      setCategoryName("")
    }
  }
  return { createCategory }
}

export default useCategoryActions
