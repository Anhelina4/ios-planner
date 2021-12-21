import Navigator from "./pages/Navigator"
import "./styles/style.css"
import { AppLayout, Header, PageLayout, Sider } from "./components"
import { PlannerProvider } from "./contexts"
import { TasksAll } from "./pages/TasksAll"
// Провайдер->Навігатор->Компонента

function App() {
  return (
    <PlannerProvider>
      <Navigator>
      </Navigator>
    </PlannerProvider>
  )
}

export default App
