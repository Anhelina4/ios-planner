import React from "react"
import { CategoryWrapper, IconWrapper } from "./CategorySimpleView.style"
import { Text, Button } from "../../../../components"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { MdClose } from "react-icons/md"

const CategorySimpleView = props => {
  const { children, focused } = props

  return (
    <CategoryWrapper focused={focused}>
      <div className="d-flex align-center justify-center">
        {!focused ? (
          <>
            <IconWrapper color="white">
              {<AiOutlineUnorderedList />}
            </IconWrapper>
            <Text size="md" className="text-semibold">
              {children}
            </Text>
          </>
        ) : (
          <>
            <IconWrapper color="white">
              {<AiOutlineUnorderedList />}
            </IconWrapper>
            <Text size="md" color="white" className="text-semibold">
              {children}
            </Text>
          </>
        )}
      </div>
      <Button active>{<MdClose />}</Button>
    </CategoryWrapper>
  )
}

export default CategorySimpleView
