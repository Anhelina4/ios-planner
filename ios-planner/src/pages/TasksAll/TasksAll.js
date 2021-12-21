import React from "react"
import { TaskList } from "../../domains/Task/components"
import { Header } from "../../components"
import { PageLayout } from "../../components"

const TasksAll = (props) => {
  const {title, color, variant}  = props
  return (
    <>
      <PageLayout header={<Header children={title} color={color} variant={variant}/>} content={<TaskList/>}/>
    </>
  )
}

export default TasksAll
