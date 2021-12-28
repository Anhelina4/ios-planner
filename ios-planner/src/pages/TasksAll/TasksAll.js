import React, { useEffect } from "react"
import { TaskList } from "../../domains/Task/components"
import { Header, PageLayout } from "../../components"
import { useParams } from "react-router-dom"
import { usePlannerContext } from "../../contexts/hooks"

const TasksAll = props => {
  const { title, color, variant } = props
  const { state, dispatch } = usePlannerContext()
  let params = useParams()

  useEffect(() => {
    console.log("console", params.id)

    params?.id &&
      dispatch({
        type: "defineCurrentCategory",
        payload: { categoryId: params?.id },
      })

    params?.id === "all" &&
      dispatch({
        type: "filterAll",
        payload: { id: params?.id, children: "All" },
      })

    params?.id === "withflag" &&
      dispatch({
        type: "filterFlagged",
        payload: { id: params?.id, children: "With flag" },
      })
  }, [dispatch, params?.id])

  return (
    <PageLayout
      header={
        <Header
          children={
            title ||
            state.currentCategory.map(el =>
              el.categoryId === params.id ? el.categoryName : null
            )
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
