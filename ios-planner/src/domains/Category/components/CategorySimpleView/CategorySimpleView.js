import React, { useState, useEffect } from "react"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleView.style"
import { Text, Button } from "../../../../components"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { useCategoryActions } from "../../hooks"
import {
  usePlannerContext,
  usePlannerActions,
} from "../../../../contexts/hooks"
import { CategorySimpleForm } from ".."
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"

const CategorySimpleView = props => {
  const { categoryId, categoryName } = props
  const { dispatch, setShowCSF, setShowTSF, state } = usePlannerContext()
  const { editCategory, deleteCategory } = useCategoryActions()
  const { hideComponent } = usePlannerActions()
  const [editedCategoryName, setEditedCategoryName] = useState(categoryName)
  const [editable, setEditable] = useState(false)
  const [focused, setFocused] = useState(false)
  let navigate = useNavigate()
  useEffect(() => {
    setFocused(
      state?.currentCategory &&
        categoryId === state?.currentCategory?.categoryId
        ? true
        : false
    )
  }, [categoryId, state?.currentCategory])

  return (
    <>
      <Link to={`/categories/${categoryId}`} className="decoration-none">
        {!editable ? (
          <CategoryWrapper
            focused={focused}
            onClick={() => {
              dispatch({
                type: "defineCurrentCategory",
                payload: { categoryId },
              })
              setShowTSF(true)
            }}>
            <div className="d-flex align-center justify-center">
              <IconWrapper color="white">
                {<AiOutlineUnorderedList />}
              </IconWrapper>
              <Text
                size="md"
                className="text-semibold"
                color={focused ? "white" : null}
                onClick={e => {
                  setEditable(true)
                  setEditedCategoryName(categoryName)
                  hideComponent(setShowCSF)
                }}>
                {categoryName}
              </Text>
            </div>
            <Link to="/categories">
              <Button
                active
                onClick={() => {
                  deleteCategory(categoryId)
                }}>
                {<MdClose />}
              </Button>
            </Link>
          </CategoryWrapper>
        ) : (
          <CategorySimpleForm
            onChange={e => setEditedCategoryName(e.target.value)}
            value={editedCategoryName}
            onKeyDown={e => {
              if (e.key === "Enter") {
                editCategory(editedCategoryName, categoryId)
                setEditable(false)
              }
            }}
            onDelete={() => deleteCategory(categoryId)}></CategorySimpleForm>
        )}
      </Link>
    </>
  )
}

export default CategorySimpleView
