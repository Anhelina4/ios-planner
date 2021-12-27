import React from "react"
import { TaskList } from "../../domains/Task/components"
import { Header, PageLayout } from "../../components"
import { useParams } from "react-router-dom"
import { usePlannerContext } from "../../contexts/hooks"
const TasksAll = props => {
  const { title, color, variant } = props
  const { state, value } = usePlannerContext()
  let params = useParams()
  console.log(params.id)
  return (
    <PageLayout
      header={
        <Header
          children={
            title 
            // ||
            // state.categories.map(el =>
            //   el.categoryId === params.id ? el.categoryName : null
            // )
          }
          color={color}
          variant={variant}
        />
      }
      content={<TaskList />}
    />
  )
}

export default TasksAll
