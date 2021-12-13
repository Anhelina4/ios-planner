import React from "react"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleForm.style"
import  {Text}  from "../../../../components"

const CategorySimpleForm = props => {
  const { icon } = props

  return (
    <CategoryWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <input type="text" className="pl-md pr-md mr-md ml-md" />
      <Text size="md" color="white">
        5
      </Text>
    </CategoryWrapper>
  )
}

export default CategorySimpleForm
