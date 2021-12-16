import React, { useState } from "react"
import { CategorySimpleView, CategorySimpleForm } from "../../components"
import { Col } from "../../../../components"
import CategoryListWrapper from "./CategoryList.style"
import { usePlannerContext } from "../../../../contexts/hooks"
import { useCategoryActions } from "../../hooks"

const CategoryList = props => {
  const { state, categoryName, setCategoryName } = usePlannerContext()
  const { createCategory, setThisAsCurrentCategory } = useCategoryActions()
  const { display } = props
  return (
    <CategoryListWrapper>
      <Col>
        {state.categories.map((item, index) => {
          return (
            <CategorySimpleView categoryId={item.categoryId} key={index}>
              {item.categoryName}
            </CategorySimpleView>
          )
        })}
      </Col>
      {display ? <CategorySimpleForm /> : null}
    </CategoryListWrapper>
  )
}

export default CategoryList
