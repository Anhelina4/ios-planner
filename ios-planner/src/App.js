import Navigator from "./pages/Navigator"
import "./styles/style.css"
import { PlannerProvider } from "./contexts"
// Провайдер->Навігатор->Компонента

function App() {
  return (
    <PlannerProvider>
      <Navigator />
    </PlannerProvider>
  )
}

export default App
