import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { TasksAll } from "./TasksAll"
import { Sider } from "../components"
import { AppLayout } from "../components"
import { usePlannerContext } from "../contexts/hooks"

const Navigator = () => {
  const { state } = usePlannerContext()

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<Navigate to="/categories" exact />}></Route>
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
            path="/categories/today"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll color="blue" title="Today" />}
              />
            }></Route>
          <Route
            path="/categories/scheduled"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll color="red" title="Scheduled" />}
              />
            }></Route>
          <Route
            path="/categories/all"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll variant="primary" title="All" />}
              />
            }></Route>
          <Route
            path="/categories/withflag"
            exact
            element={
              <AppLayout
                left={<Sider />}
                right={<TasksAll color="orange" title="With flag" />}
              />
            }></Route>
          <Route
            path="/categories/:id"
            element={
              <AppLayout
                left={<Sider />}
                right={
                  <TasksAll
                    color="blue"
                    title={state.currentCategory.categoryName || "New List"}
                  />
                }></AppLayout>
            }></Route>
          <Route
            path="/categories/search"
            element={
              <AppLayout
                left={<Sider />}
                right={
                  <TasksAll
                    color="blue"
                    title={state.currentCategory.categoryName || "New List"}
                  />
                }></AppLayout>
            }></Route>
        </Routes>
      </Router>
    </>
  )
}

export default Navigator
