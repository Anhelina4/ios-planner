import React, { useEffect } from "react"
import { TaskList } from "../../domains/Task/components"
import { Header, PageLayout } from "../../components"
import { useParams } from "react-router-dom"
import { usePlannerContext } from "../../contexts/hooks"

const TasksAll = props => {
  const { title, color, variant } = props
  const { state, dispatch, value } = usePlannerContext()
  let params = useParams()

  useEffect(() => {
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

    if (params?.id === "today" || params?.id === "scheduled") {
      dispatch({
        type: "clearAll",
        payload: {
          id: "none",
          categoryName: params?.id === "today" ? "Today" : "Scheduled",
          permission: true,
        },
      })
    }

    params?.id === "search" &&
      dispatch({
        type: "searchTask",
        payload: { value: value },
      })
  }, [dispatch, params?.id, value])

  return (
    <PageLayout
      header={<Header children={title} color={color} variant={variant} />}
      content={<TaskList />}
    />
  )
}

export default TasksAll
