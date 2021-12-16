import React, { useState } from "react"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleView.style"
import { Text, Button } from "../../../../components"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { useCategoryActions } from "../../hooks"
import { CategorySimpleForm } from ".."
import { usePlannerContext } from "../../../../contexts/hooks"
import { usePlannerActions } from "../../../../contexts/hooks"
import editCategory from "../../../../contexts/reducer/editCategory"

const CategorySimpleView = props => {
  const { children, focused, categoryId } = props
  const { dispatch } = usePlannerContext()
  const { categoryName, setCategoryName, showcsf, setShowCSF } = usePlannerContext()
  const { createCategory } = useCategoryActions()
  const { hideComponent } = usePlannerActions()
  const [editedCategoryName, setEditedCategoryName] = useState(children)
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
              onClick={(e)=>{setEditable(true)
              e.stopPropagation()
              hideComponent(setShowCSF)}}>
              {children}
            </Text>
          </div>
          <Button active>{<MdClose />}</Button>
        </CategoryWrapper>
      ) : (
        <CategoryWrapper>
          <div className="d-flex align-center">
            <IconWrapper color="white">
              {<AiOutlineUnorderedList />}
            </IconWrapper>
            <input
              type="text"
              className="pl-md pr-md mr-md ml-md"
              onClick={(e)=>{setEditable(false)
                e.stopPropagation()}}
              onChange={e => {setCategoryName(e.target.value)
              }}
              autoFocus
            />
            <Text size="md">5</Text>
          </div>
          <Button>{<MdClose />}</Button>
        </CategoryWrapper>
      )}
    </>
  )
}

export default CategorySimpleView
