import Navigator from "./pages/Navigator"
import "./styles/style.css"
import {  AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import {ButtonPrimary, ButtonSecondary} from "./components/Button/Button.style"
function App() {
  return <>
  <ButtonPrimary><AiOutlinePlus /></ButtonPrimary>
  <ButtonSecondary outlined><AiOutlinePlus /></ButtonSecondary>
  <ButtonSecondary ><AiOutlineClose/></ButtonSecondary>
  </>
}

export default App
