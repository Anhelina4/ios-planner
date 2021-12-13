import React from "react"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleForm.style"
import { Text, Button } from "../../../../components"
import { MdClose } from "react-icons/md"
const CategorySimpleForm = props => {
  const { icon } = props

  return (
    <CategoryWrapper>
      <div className="d-flex align-center">
        <IconWrapper>{icon}</IconWrapper>
        <input type="text" className="pl-md pr-md mr-md ml-md" />
        <Text size="md" color="white">
          5
        </Text>
      </div>
      <Button>{<MdClose />}</Button>
    </CategoryWrapper>
  )
}

export default CategorySimpleForm
