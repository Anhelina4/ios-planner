import { useState } from "react"
import { BsEggFill } from "react-icons/bs"
import { usePlannerContext } from "../../../contexts/hooks"

const useCategoryActions = () => {
  const { state, dispatch, categoryName, setCategoryName, editedCategoryName } =
    usePlannerContext()

  const createCategory = e => {
    if (e.key === "Enter") {
      dispatch({ type: "createCategory", payload: { categoryName } })
      setCategoryName("")
    }
  }

  const editCategory = (editedCategoryName, categoryId) => {
    console.log(editedCategoryName, categoryId)
    dispatch({
      type: "editCategory",
      payload: { editedCategoryName, categoryId },
    })
  }

  // const setThisAsCurrentCategory = (categoryId) => {
  //   console.log("currentCategory worked")
  //   state.categories.filter(item => {
  //     if (item.categoryId === categoryId) {
  //       state.currentCategory = {...item, item};
  //       console.log(item)
  //       return {...state}
  //     }
  //     return {...state}
  //   })
  // }
  return { createCategory, editCategory }
}

export default useCategoryActions
