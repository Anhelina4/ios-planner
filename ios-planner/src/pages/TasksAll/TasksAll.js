import React, { useEffect, useState } from "react"
import { TaskList } from "../../domains/Task/components"
import { Header, PageLayout } from "../../components"
import { useParams } from "react-router-dom"
import { usePlannerContext } from "../../contexts/hooks"

const TasksAll = props => {
  const { title, variant } = props
  const [accentColor, setAccentColor] = useState()
  const { dispatch, value } = usePlannerContext()
  let params = useParams()
  const [displayBtn, setDisplayBtn] = useState("Hide")
  console.log("displayBtn", displayBtn)
  useEffect(() => {
    if (params?.id) {
      dispatch({
        type: "defineCurrentCategory",
        payload: { categoryId: params?.id },
      })
      setAccentColor("blue")
    }

    if (params?.id === "all") {
      setAccentColor("grey")
      dispatch({
        type: "filterAll",
        payload: { id: params?.id, children: "All" },
      })
    }

    if (params?.id === "withflag") {
      setAccentColor("orange")
      dispatch({
        type: "filterFlagged",
        payload: { id: params?.id, children: "With flag" },
      })
    }

    if (params?.id === "today" || params?.id === "scheduled") {
      setAccentColor(params?.id === "today" ? "blue" : "red")
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
      header={
        <Header
          children={title}
          color={accentColor}
          variant={variant}
          displayBtn={displayBtn}
          setDisplayBtn={setDisplayBtn}
        />
      }
      content={<TaskList display={displayBtn} />}
    />
  )
}

export default TasksAll
