import React from "react"
import { CategorySimpleView, CategorySimpleForm } from "../../components"
import { Col } from "../../../../components"
import CategoryListWrapper from "./CategoryList.style"
import { usePlannerContext } from "../../../../contexts/hooks"
import { useCategoryActions } from "../../hooks"
import { v4 as uuidv4 } from "uuid"

const CategoryList = props => {
  const { state, categoryName, setCategoryName } = usePlannerContext()
  const { createCategory } = useCategoryActions()
  const { display } = props
  const categoryId = uuidv4()

  return (
    <CategoryListWrapper>
      <Col>
        {state?.categories?.length > 0
          ? state.categories.map((item, index) => {
              return (
                <CategorySimpleView
                  categoryId={item.categoryId}
                  key={index}
                  categoryName={item.categoryName}></CategorySimpleView>
              )
            })
          : null}
      </Col>
      {display ? (
        <CategorySimpleForm
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && categoryName !== "") {
              createCategory(categoryName, categoryId)
            }
          }}
        />
      ) : null}
    </CategoryListWrapper>
  )
}

export default CategoryList
