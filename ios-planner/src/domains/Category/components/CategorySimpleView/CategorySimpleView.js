import React from "react"
import { CategoryWrapper, IconWrapper } from "./Category.style"
import { Text, Button } from "../../../../components"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {MdClose} from "react-icons/md"
const CategorySimpleView = props => {
  const { icon, children, btnIcon, focused } = props
  return (
    <CategoryWrapper focused={focused}>
      <div className="d-flex align-center justify-center">
        
        {!focused ? (
          <>
          <IconWrapper color="white">{<AiOutlineUnorderedList/>}</IconWrapper>
            <Text size="md">
              {children}
            </Text>
          </>
        ) : (
          <>
          <IconWrapper color="white">{< MdClose/>}</IconWrapper>
            <Text size="md" color="white">
              {children}
            </Text>
            
          </>
        )}
        
      </div>
      <Button>{btnIcon}</Button>
    </CategoryWrapper>
  )
}

export default CategorySimpleView
