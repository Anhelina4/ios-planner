import React from "react"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleForm.style"
import { Text, Button } from "../../../../components"
import { MdClose } from "react-icons/md"
import { AiOutlineUnorderedList } from "react-icons/ai"

const CategorySimpleForm = props => {
  const { onClick, onChange, onKeyDown, value, onDelete } = props

  return (
    <CategoryWrapper>
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
      <div className="d-flex justify-end">
        <Text size="md" color="white">
          0
        </Text>
        <Button onClick={onDelete}>{<MdClose />}</Button>
      </div>
    </CategoryWrapper>
  )
}

export default CategorySimpleForm
