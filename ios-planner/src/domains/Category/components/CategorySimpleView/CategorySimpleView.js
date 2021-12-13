import React from "react"
import { CategoryWrapper, IconWrapper } from "./Category.style"
import { Text, Button } from "../../../../components"

const CategorySimpleView = props => {
  const { icon, children, btnIcon, focused } = props
  return (
    <CategoryWrapper focused={focused}>
      <div className="d-flex align-center justify-center">
        
        {!focused ? (
          <>
          <IconWrapper color="white">{icon}</IconWrapper>
            <Text size="md">
              {children}
            </Text>
          </>
        ) : (
          <>
          <IconWrapper color="white">{icon}</IconWrapper>
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
