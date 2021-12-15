import Navigator from "./pages/Navigator"
import "./styles/style.css"
import { AppLayout } from "./components"
import { PlannerProvider } from "./contexts"
// Провайдер->Навігатор->Компонента

function App() {
  return (
    <PlannerProvider>
      <AppLayout></AppLayout>
    </PlannerProvider>
  )
}

export default App
