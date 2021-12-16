import React from "react"
import { CategorySimpleView, CategorySimpleForm } from "../../components"
import { Col } from "../../../../components"
import CategoryListWrapper from "./CategoryList.style"
import { usePlannerContext } from "../../../../contexts/hooks"
import { useCategoryActions } from "../../hooks"

const CategoryList = props => {
  const { state, categoryName, setCategoryName } = usePlannerContext()
  const { createCategory } = useCategoryActions()
  const { display } = props

  return (
    <CategoryListWrapper>
      <Col>
        {state.categories.map((item, index) => {
          return (
            <CategorySimpleView
              categoryId={item.categoryId}
              key={index}
              categoryName={item.categoryName}></CategorySimpleView>
          )
        })}
      </Col>
      {display ? (
        <CategorySimpleForm
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
          onKeyDown={createCategory}
        />
      ) : null}
    </CategoryListWrapper>
  )
}

export default CategoryList
