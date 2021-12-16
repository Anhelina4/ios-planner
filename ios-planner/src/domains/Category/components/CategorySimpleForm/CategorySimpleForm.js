import React from "react"
import { usePlannerContext } from "../../../../contexts/hooks"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleForm.style"
import { Text, Button } from "../../../../components"
import { MdClose } from "react-icons/md"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { useCategoryActions } from "../../hooks"

const CategorySimpleForm = props => {
  const { editedCategoryName, onClick, onChange, onKeyDown, value } = props
  console.log("inside-value",editedCategoryName)
  console.log("inside-props", props)
  return (
    <CategoryWrapper>
      <div className="d-flex align-center">
        <IconWrapper color="white">{<AiOutlineUnorderedList />}</IconWrapper>
        <input
          autoFocus
          type="text"
          className="pl-md pr-md mr-md ml-md"
          value={value}
          onClick={onClick}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Text size="md" color="white">
          0
        </Text>
      </div>
      <Button>{<MdClose />}</Button>
    </CategoryWrapper>
  )
}

export default CategorySimpleForm
