import React from "react"
import CategorySimpleView from "../CategorySimpleView/CategorySimpleView"
import { Col } from "../../../../components"
import CategoryListWrapper from "./CategoryList.style"

const CategoryList = () => {
  return (
    <CategoryListWrapper>
      <Col className="mb-lg">
        <CategorySimpleView>My new List</CategorySimpleView>
      </Col>
      <Col className="mb-lg">
        <CategorySimpleView focused>My new List</CategorySimpleView>
      </Col>
      <Col className="mb-lg">
        <CategorySimpleView>My new List</CategorySimpleView>
      </Col>
    </CategoryListWrapper>
  )
}

export default CategoryList
