import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { TasksAll } from "./TasksAll"
import { Sider } from "../components"
import { AppLayout } from "../components"
const Navigator = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/categories"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll color="blue" title="New List" />}
              />
            }></Route>
          <Route
            path="/today"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll color="blue" title="Today" />}
              />
            }></Route>
          <Route
            path="/scheduled"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll color="red" title="Scheduled" />}
              />
            }></Route>
          <Route
            path="/all"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll variant="primary" title="All" />}
              />
            }></Route>
          <Route
            path="/withflag"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll color="orange" title="With flag" />}
              />
            }></Route>
        </Routes>
      </Router>
    </>
  )
}

export default Navigator
