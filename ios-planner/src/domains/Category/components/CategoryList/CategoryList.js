import React from "react"
import { CategorySimpleView, CategorySimpleForm } from "../../components"
import { Col } from "../../../../components"
import CategoryListWrapper from "./CategoryList.style"
import { usePlannerContext } from "../../../../contexts/hooks"

const CategoryList = () => {
  const { state } = usePlannerContext()
  return (
    <CategoryListWrapper>
      {state.categories.map(item => {
        return (
          <Col>
            <CategorySimpleView categoryId={item.categoryId}>
              {item.categoryName}
            </CategorySimpleView>
          </Col>
        )
      })}
      <CategorySimpleForm></CategorySimpleForm>
    </CategoryListWrapper>
  )
}

export default CategoryList
