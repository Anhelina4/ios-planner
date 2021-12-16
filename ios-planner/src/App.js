import Navigator from "./pages/Navigator"
import "./styles/style.css"
import { AppLayout, Header, PageLayout, Sider } from "./components"
import { PlannerProvider } from "./contexts"
import { TasksAll } from "./pages/TasksAll"
// Провайдер->Навігатор->Компонента

function App() {
  return (
    <PlannerProvider>
      <AppLayout
        left={<Sider />}
        right={
          <PageLayout
            header={
              <Header color="blue" className="mb-xl">
                New List
              </Header>
            }
            content={<TasksAll />}
          />
        }></AppLayout>
    </PlannerProvider>
  )
}

export default App
