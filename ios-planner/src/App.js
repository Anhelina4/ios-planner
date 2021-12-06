import Navigator from "./pages/Navigator"
import "./styles/style.css"
import Button from "./components/Button/Button"
import { Counter } from "./components/Counter"
import { MdAddCircleOutline, MdAddCircle, MdClose } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
function App() {
  return (
    <>
      <Button icon={<MdAddCircleOutline />} size="20px" />
      <Button icon={<MdAddCircle />} size="20px" />
      <Button icon={<MdClose />} size="20px" />
      <Button icon={<AiOutlinePlus />} hovered active size="28px" />
      <Counter theme="#4e4d4d" size="16px" count="0" />
      <Counter theme="#4e4d4d" size="20px" count="0" />
      <Counter theme="#4e4d4d" size="40px" count="0" />
      <Counter theme="#929292" size="16px" count="0" />
      <Counter theme="#929292" size="20px" count="0" />
      <Counter theme="#929292" size="40px" count="0" />
      <Counter theme="#929292" count="0" />
    </>
  )
}

export default App
