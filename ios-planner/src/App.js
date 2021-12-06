import Navigator from "./pages/Navigator"
import "./styles/style.css"
import Button from "./components/Button/Button"
import {MdAddCircleOutline, MdAddCircle, MdClose,} from "react-icons/md";
import { AiOutlinePlus} from "react-icons/ai"
function App() {
  return <>
  <Button icon={<MdAddCircleOutline/>} size="20px"></Button>
  <Button icon={< MdAddCircle/>} size="20px"></Button>
  <Button icon={<MdClose/>} size="20px"></Button>
  <Button icon={< AiOutlinePlus/>} hovered="hovered" active="active" size="28px"></Button>
  
  </>
}

export default App
