import React from "react"
import CategorySimpleView from "../CategorySimpleView/CategorySimpleView"
import { Col } from "../../../../components"
import CategoryListWrapper from "./CategoryList.style"

const CategoryList = () => {
  return (
    <CategoryListWrapper>
      <Col>
        <CategorySimpleView>My new List</CategorySimpleView>
      </Col>
    </CategoryListWrapper>
  )
}

export default CategoryList
