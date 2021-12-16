import React, { useState } from "react"
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

const CategorySimpleView = props => {
  const { focused, categoryId, categoryName, value } = props
  const { setShowCSF } = usePlannerContext()
  const { editCategory, deleteCategory } = useCategoryActions()
  const { hideComponent } = usePlannerActions()
  const [editedCategoryName, setEditedCategoryName] = useState(categoryName)
  const [editable, setEditable] = useState(false)

  return (
    <>
      {!editable ? (
        <CategoryWrapper focused={focused}>
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
                e.stopPropagation()
                setEditedCategoryName(categoryName)
                hideComponent(setShowCSF)
              }}>
              {categoryName}
            </Text>
          </div>
          <Button
            active
            onClick={() => {
              deleteCategory(categoryId)
            }}>
            {<MdClose />}
          </Button>
        </CategoryWrapper>
      ) : (
        <CategorySimpleForm
          onClick={e => {
            setEditable(false)
            e.stopPropagation()
          }}
          onChange={e => setEditedCategoryName(e.target.value)}
          value={editedCategoryName}
          onKeyDown={e => {
            if (e.key === "Enter") {
              editCategory(editedCategoryName, categoryId)
              setEditable(false)
            }
          }}></CategorySimpleForm>
      )}
    </>
  )
}

export default CategorySimpleView
