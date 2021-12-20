import React from "react"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleForm.style"
import { Text, Button } from "../../../../components"
import { MdClose } from "react-icons/md"
import { AiOutlineUnorderedList } from "react-icons/ai"

const CategorySimpleForm = props => {
  const { onClick, onChange, onKeyDown, value, onDelete } = props

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
      <Button onClick={onDelete}>{<MdClose />}</Button>
    </CategoryWrapper>
  )
}

export default CategorySimpleForm
