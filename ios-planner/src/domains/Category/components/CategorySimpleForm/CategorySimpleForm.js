import React from "react"
import { usePlannerContext } from "../../../../contexts/hooks"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleForm.style"
import { Text, Button } from "../../../../components"
import { MdClose } from "react-icons/md"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { useCategoryActions } from "../../hooks"

const CategorySimpleForm = () => {
  const { categoryName, setCategoryName } = usePlannerContext()
  const { createCategory } = useCategoryActions()
  return (
    <CategoryWrapper>
      <div className="d-flex align-center">
        <IconWrapper color="white">{<AiOutlineUnorderedList />}</IconWrapper>
        <input
          type="text"
          value={categoryName}
          className="pl-md pr-md mr-md ml-md"
          onChange={e => setCategoryName(e.target.value)}
          onKeyDown={createCategory}
        />
        <Text size="md" color="white">
          5
        </Text>
      </div>
      <Button>{<MdClose />}</Button>
    </CategoryWrapper>
  )
}

export default CategorySimpleForm
